document.addEventListener('DOMContentLoaded', () => {
    let token = localStorage.getItem('access_token');
    
    // Auth Modal Logic (assuming we add a login modal to HTML)
    // Simple fetch wrapper to inject auth and unwrap data
    const apiCall = async (url, options = {}) => {
        console.log("Calling API...", url);
        options.headers = options.headers || {};
        if (token) options.headers['Authorization'] = `Bearer ${token}`;
        
        try {
            const res = await fetch(url, options);
            
            if (res.status === 401) {
                localStorage.removeItem('access_token');
                token = null;
                showToast("Session expired. Please log in again.");
                window.location.reload();
                return;
            }
            
            let parsed = await res.json();
            console.log("Response:", parsed);
            
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.success !== undefined) return parsed.data;
            return parsed;
        } catch (err) {
            console.error("Frontend Error:", err);
            throw err;
        }
    };

    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const exportLinkedinBtn = document.getElementById('exportLinkedinBtn');
    const startAutoBtn = document.getElementById('startAutoBtn');
    const stopAutoBtn = document.getElementById('stopAutoBtn');
    const categorySelect = document.getElementById('categorySelect');
    
    // Quick Actions
    const qaGenerateBtn = document.getElementById('qaGenerateBtn');
    const qaCopyBtn = document.getElementById('qaCopyBtn');
    const qaAutoBtn = document.getElementById('qaAutoBtn');

    // Series generator
    const seriesTopic = document.getElementById('seriesTopic');
    const genSeriesBtn = document.getElementById('genSeriesBtn');

    // Comment replier
    const commentInput = document.getElementById('commentInput');
    const replyAiBtn = document.getElementById('replyAiBtn');
    const replyResult = document.getElementById('replyResult');
    
    // Prediction & Output elements
    const engScoreBadge = document.getElementById('engScoreBadge');
    const engReason = document.getElementById('engReason');
    const fallbackWarning = document.getElementById('fallbackWarning');

    const btnText = document.querySelector('.btn-text');
    const loader = document.querySelector('.loader');
    const emptyState = document.getElementById('emptyState');
    const resultCard = document.getElementById('resultCard');
    
    const topicBadge = document.getElementById('topicBadge');
    const postText = document.getElementById('postText');
    const rationaleText = document.getElementById('rationaleText');
    const historyList = document.getElementById('historyList');
    const toast = document.getElementById('toast');
    
    // Auto mode elements
    const autoStatusDot = document.getElementById('autoStatusDot');
    const autoStatusText = document.getElementById('autoStatusText');
    const lastRunText = document.getElementById('lastRunText');
    const nextRunText = document.getElementById('nextRunText');
    
    // User Stats elements
    const postsTodayText = document.getElementById('postsTodayText');
    const streakText = document.getElementById('streakText');
    const levelText = document.getElementById('levelText');
    const pointsText = document.getElementById('pointsText');
    
    // Modals
    const onboardingModal = document.getElementById('onboardingModal');
    const completeOnboardBtn = document.getElementById('completeOnboardBtn');
    
    // Feedback Modal
    const feedbackModal = document.getElementById('feedbackModal');
    const feedbackYesBtn = document.getElementById('feedbackYesBtn');
    const feedbackNoBtn = document.getElementById('feedbackNoBtn');
    const feedbackTextSection = document.getElementById('feedbackTextSection');
    const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
    const skipFeedbackBtn = document.getElementById('skipFeedbackBtn');
    const feedbackComment = document.getElementById('feedbackComment');

    let isGenerating = false;
    let autoStatusTimer = null;
    let hasNotifiedToday = false;
    let currentPostId = null;
    let feedbackIsUseful = null;

    // Load History
    const loadHistory = async () => {
        try {
            const data = await apiCall('/api/history');
            renderHistory(data.history);
        } catch (e) {
            console.error('Failed to load history');
        }
    };

    const renderHistory = (history) => {
        historyList.innerHTML = '';
        if (!history || history.length === 0) {
            historyList.innerHTML = '<div style="padding: 1.25rem; color: var(--text-secondary); text-align: center; font-size: 0.9rem;">No history yet</div>';
            return;
        }

        [...history].forEach((item) => {
            const el = document.createElement('div');
            el.className = 'history-item';
            
            const stateLabel = item.post_state === 'POSTED' ? '🌐 POSTED' : (item.post_state === 'PENDING' ? '⏳ PENDING' : '📝 GENERATED');
            const metrics = item.post_state === 'POSTED' ? `<span style="color:#34d399">👍 ${item.simulated_likes} 💬 ${item.simulated_comments}</span>` : '';
            
            el.innerHTML = `
                <div class="history-topic">${item.topic}</div>
                <div class="history-meta" style="margin-bottom: 0.3rem;">
                    <span style="font-weight:600; color:var(--accent-blue)">${stateLabel}</span>
                    <span>${item.category || ''}</span>
                </div>
                ${metrics ? `<div class="history-meta">${metrics}</div>` : ''}
            `;
            
            el.addEventListener('click', () => {
                showResult(item);
            });
            
            historyList.appendChild(el);
        });
    };

    // Load User Data
    const loadUserData = async () => {
        try {
            const data = await apiCall('/api/user_data');
            
            postsTodayText.textContent = data.posts_today;
            streakText.textContent = data.streak + ' days';
            levelText.textContent = data.level;
            pointsText.textContent = data.points + " XP";
            
            // Check daily notification
            if (data.posts_today === 0 && !hasNotifiedToday && data.is_onboarded) {
                showToast("You haven't posted today! Keep your streak alive! 🔥");
                hasNotifiedToday = true;
            }

            // Onboarding Check
            if (!data.is_onboarded) {
                onboardingModal.classList.remove('hidden');
            }

        } catch (e) {
            console.log("User data fallback")
        }
    }

    // Onboarding flow
    completeOnboardBtn.addEventListener('click', async () => {
        const nicheInput = document.getElementById('onboardNiche');
        const goalSelect = document.getElementById('onboardGoal');
        
        completeOnboardBtn.disabled = true;
        completeOnboardBtn.textContent = "Setting up your AI Agent...";
        
        try {
            await apiCall('/api/onboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ niche: nicheInput.value, goal: goalSelect.value })
            });
            onboardingModal.classList.add('hidden');
            showToast("Welcome! Check Recent Posts for your first demo post.");
            setTimeout(loadHistory, 3000);
            loadUserData();
        } catch(e) {
            showToast("Error saving onboarding details", true);
            completeOnboardBtn.disabled = false;
        }
    });

    // Feedback Flow
    const submitFeedback = async (is_useful, comments="") => {
        try {
            await apiCall('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ post_id: currentPostId, is_useful, comments })
            });
            feedbackModal.classList.add('hidden');
            showToast("Thank you for your feedback! 🚀");
        } catch (e) {
            feedbackModal.classList.add('hidden');
        }
    };

    feedbackYesBtn.addEventListener('click', () => {
        feedbackIsUseful = true;
        feedbackTextSection.classList.remove('hidden');
    });

    feedbackNoBtn.addEventListener('click', () => {
        feedbackIsUseful = false;
        feedbackTextSection.classList.remove('hidden');
    });

    submitFeedbackBtn.addEventListener('click', () => {
        submitFeedback(feedbackIsUseful, feedbackComment.value);
    });

    skipFeedbackBtn.addEventListener('click', () => {
        feedbackModal.classList.add('hidden');
    });

    const showResult = (data) => {
        currentPostId = data.id;
        postText.textContent = data.post;
        rationaleText.textContent = data.rationale;
        topicBadge.textContent = data.topic;
        
        // Handle Fallback display
        if (data.status === 'FALLBACK') {
            fallbackWarning.classList.remove('hidden');
        } else {
            fallbackWarning.classList.add('hidden');
        }

        if (data.engagement_score) {
            engScoreBadge.textContent = data.engagement_score;
            engScoreBadge.className = 'badge badge-' + data.engagement_score.toLowerCase();
            engReason.textContent = data.engagement_reason || "Analyzed by AI.";
        }
        
        emptyState.classList.add('hidden');
        resultCard.classList.remove('hidden');
        clearBtn.classList.remove('hidden');
    };

    const showToast = (message) => {
        let toast = document.createElement("div");

        toast.innerText = message;
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.background = "#1e293b";
        toast.style.color = "#fff";
        toast.style.padding = "10px 16px";
        toast.style.borderRadius = "8px";
        toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        toast.style.zIndex = "9999";
        toast.style.fontSize = "14px";

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    };

    // Auto Mode Logic
    const formatTime = (timestamp) => {
        if (!timestamp) return 'Never';
        return new Date(timestamp * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    };

    const updateAutoStatusUI = (data) => {
        if (data.active) {
            autoStatusDot.classList.add('active');
            autoStatusText.textContent = 'ON';
            startAutoBtn.classList.add('hidden');
            stopAutoBtn.classList.remove('hidden');
        } else {
            autoStatusDot.classList.remove('active');
            autoStatusText.textContent = 'OFF';
            startAutoBtn.classList.remove('hidden');
            stopAutoBtn.classList.add('hidden');
        }

        lastRunText.textContent = formatTime(data.last_run);
        
        if (data.active && data.next_run) {
            const diff = Math.max(0, Math.floor(data.next_run - (Date.now() / 1000)));
            const mins = Math.floor(diff / 60).toString().padStart(2, '0');
            const secs = (diff % 60).toString().padStart(2, '0');
            nextRunText.textContent = `in ${mins}:${secs}`;
        } else {
            nextRunText.textContent = '-';
        }
    };

    const pollAutoStatus = async () => {
        try {
            const data = await apiCall('/api/auto/status');
            updateAutoStatusUI(data);
            
            if (data.active) { 
                loadHistory(); 
                loadUserData();
            }
        } catch (e) {
            console.error('Failed to poll auto status');
        }
    };

    // Comment Replier
    replyAiBtn.addEventListener('click', async () => {
        if (!commentInput.value.trim()) {
            showToast("Please enter a comment first", true);
            return;
        }
        replyAiBtn.disabled = true;
        replyAiBtn.textContent = "Thinking...";
        try {
            const data = await apiCall('/api/reply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ comment: commentInput.value })
            });
            replyResult.textContent = data.reply;
            replyResult.classList.remove('hidden');
            
            navigator.clipboard.writeText(data.reply);
            showToast("Reply generated and copied!");
        } catch (e) {
            showToast("Failed to generate reply", true);
        } finally {
            replyAiBtn.disabled = false;
            replyAiBtn.textContent = "Generate Smart Reply";
        }
    });

    // Events
    clearBtn.addEventListener('click', () => {
        emptyState.classList.remove('hidden');
        resultCard.classList.add('hidden');
        clearBtn.classList.add('hidden');
    });

    const triggerCopy = () => {
        const text = postText.textContent;
        if (!text) { showToast("No post to copy", true); return; }
        navigator.clipboard.writeText(text).then(() => {
            showToast('Post copied to clipboard! Paste it on LinkedIn.');
        });
    }

    copyBtn.addEventListener('click', triggerCopy);
    exportLinkedinBtn.addEventListener('click', triggerCopy);
    qaCopyBtn.addEventListener('click', triggerCopy);

    const triggerGeneration = async (category, series_topic=null) => {
        if (isGenerating) {
            console.log("❌ Duplicate click blocked");
            return;
        }
        isGenerating = true;
        
        generateBtn.disabled = true;
        if(genSeriesBtn) genSeriesBtn.disabled = true;
        btnText.textContent = 'Generating...';
        loader.classList.remove('hidden');
        
        try {
            console.log("✅ API CALL STARTED (ONLY ONCE)");
            const bodyData = { category };
            if (series_topic) bodyData.series_topic = series_topic;

            const data = await apiCall('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData)
            });
            
            showResult(data);
            showToast('Viral post generated successfully!');
            loadHistory();
            loadUserData();
            
            // Show Feedback Modal after generation
            setTimeout(() => {
                feedbackTextSection.classList.add('hidden');
                feedbackComment.value = "";
                feedbackModal.classList.remove('hidden');
            }, 2500);
            
        } catch (error) {
            console.error('Error:', error);
            let msg = error.message || "Something went wrong";
            if (msg.includes("Rate limit")) {
                msg = "⏳ Please wait a few seconds before generating again";
            }
            showToast(msg);
        } finally {
            isGenerating = false;
            generateBtn.disabled = false;
            if(genSeriesBtn) genSeriesBtn.disabled = false;
            btnText.textContent = '🚀 Generate Viral Post';
            loader.classList.add('hidden');
        }
    };

    generateBtn.addEventListener('click', () => triggerGeneration(categorySelect.value));
    qaGenerateBtn.addEventListener('click', () => triggerGeneration(categorySelect.value));
    if(genSeriesBtn) genSeriesBtn.addEventListener('click', () => triggerGeneration(null, seriesTopic.value));

    const triggerAutoStart = async () => {
        try {
            const data = await apiCall('/api/auto/start', { method: 'POST' });
            if (data.success) {
                showToast('Agent Started');
            } else if (data.error) {
                showToast(data.error, true);
            }
            pollAutoStatus();
        } catch (e) {}
    }

    startAutoBtn.addEventListener('click', triggerAutoStart);
    qaAutoBtn.addEventListener('click', triggerAutoStart);

    stopAutoBtn.addEventListener('click', async () => {
        try {
            const data = await apiCall('/api/auto/stop', { method: 'POST' });
            if (data.success) showToast('Agent Stopped');
            pollAutoStatus();
        } catch (e) {}
    });

    // Initial load
    loadHistory();
    loadUserData();
    // Auto status polling completely removed as requested

    // File Upload Logic
    const fileUploadInput = document.getElementById('fileUploadInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadResult = document.getElementById('uploadResult');

    if (uploadBtn && fileUploadInput && uploadResult) {
        uploadBtn.addEventListener('click', async () => {
            const file = fileUploadInput.files[0];
            if (!file) {
                showToast("Please select a file to upload", true);
                return;
            }

            uploadBtn.disabled = true;
            uploadBtn.textContent = "Analyzing...";
            uploadResult.classList.add('hidden');

            const formData = new FormData();
            formData.append('file', file);

            try {
                const data = await apiCall('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                
                showToast(`File ${data.filename} analyzed successfully!`);
                uploadResult.innerHTML = `<strong>Analysis Result:</strong><br><p style="margin-top:0.5rem; font-size:0.9rem; color:var(--text-secondary);">${data.summary.replace(/\\n/g, '<br>')}</p>`;
                uploadResult.classList.remove('hidden');
            } catch (error) {
                showToast("Failed to upload file", true);
            } finally {
                uploadBtn.disabled = false;
                uploadBtn.textContent = "Upload & Analyze";
                fileUploadInput.value = "";
            }
        });
    }
});
