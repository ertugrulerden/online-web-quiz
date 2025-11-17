// Current game state
let selectedChapter = null;
let currentQuestions = [];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let shuffledQuestions = [];
let userAnswers = []; // Store user's answers for each question

// Game State Variables
let gameMode = 'practice'; // practice, timed, speed
let timerInterval = null;
let timeLeft = 30;
let gameStarted = false;
let randomOrderEnabled = true; // Random question order toggle

// Progress Tracking
let playerStats = {
    level: 1,
    xp: 0,
    streak: 0,
    hintsRemaining: 3,
    totalCorrect: 0,
    totalQuestions: 0,
    bestStreak: 0,
    achievements: []
};

// Load saved progress
function loadProgress() {
    const saved = localStorage.getItem('dsaQuizProgress');
    if (saved) {
        playerStats = { ...playerStats, ...JSON.parse(saved) };
    }
}

// Save progress
function saveProgress() {
    localStorage.setItem('dsaQuizProgress', JSON.stringify(playerStats));
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle options and track correct answer
function shuffleQuestionOptions(question) {
    const originalOptions = [...question.options];
    const correctAnswer = originalOptions[question.correct];
    
    // Create array of indices and shuffle them
    const indices = Array.from({length: originalOptions.length}, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    
    // Create shuffled options array
    const shuffledOptions = shuffledIndices.map(index => originalOptions[index]);
    
    // Find new position of correct answer
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex,
        originalCorrect: question.correct
    };
}

function highlightPythonCode(code) {
    const lines = code.split('\n');
    const highlightedLines = lines.map((line, index) => {
        // Preserve original indentation
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : '';
        let workingLine = line.trim();
        
        if (!workingLine) {
            return `<div class="code-line"><span class="line-number">${(index + 1).toString().padStart(2, ' ')}</span></div>`;
        }
        
        // Tokenize the line to avoid overlapping highlights
        const tokens = [];
        let currentPos = 0;
        
        // Simple tokenizer - split by spaces and special characters but keep them
        const parts = workingLine.split(/(\s+|[()[\]{},.:;+=\-*/<>!&|])/);
        
        for (let part of parts) {
            if (!part) continue;
            
            let className = '';
            
            // Determine token type
            if (/^\s+$/.test(part)) {
                // Whitespace
                tokens.push(part);
                continue;
            } else if (/^(def|for|if|else|elif|while|in|range|return|len|import|from|class|try|except|finally|with|as|pass|break|continue|and|or|not|is|None|True|False)$/.test(part)) {
                className = 'keyword';
            } else if (/^\d+(\.\d+)?$/.test(part)) {
                className = 'number';
            } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(part)) {
                // Check if next non-whitespace token is '('
                let nextIndex = parts.indexOf(part) + 1;
                while (nextIndex < parts.length && /^\s*$/.test(parts[nextIndex])) {
                    nextIndex++;
                }
                if (nextIndex < parts.length && parts[nextIndex] === '(') {
                    className = 'function';
                } else {
                    className = 'variable';
                }
            } else if (/^[+\-*/%=<>!&|]+$/.test(part)) {
                className = 'operator';
            } else if (part.startsWith('#')) {
                // Rest of line is comment
                const remainingLine = workingLine.substring(workingLine.indexOf(part));
                tokens.push(`<span class="comment">${remainingLine}</span>`);
                break;
            } else if (part.startsWith('"') || part.startsWith("'")) {
                className = 'string';
            }
            
            if (className) {
                tokens.push(`<span class="${className}">${part}</span>`);
            } else {
                tokens.push(part);
            }
        }
        
        const highlightedLine = tokens.join('');
        const indentSpaces = indent.replace(/\s/g, '&nbsp;');
        
        return `<div class="code-line"><span class="line-number">${(index + 1).toString().padStart(2, ' ')}</span>${indentSpaces}${highlightedLine}</div>`;
    });
    
    return highlightedLines.join('');
}

// Update quiz header based on selected chapter and mode
function updateQuizHeader() {
    const chapter = chapters[selectedChapter];
    const modeNames = {
        'practice': '🎯 Practice Mode',
        'timed': '⏱️ Timed Challenge',
        'speed': '⚡ Speed Run'
    };
    
    const titleElement = document.getElementById('quizTitle');
    const subtitleElement = document.getElementById('quizSubtitle');
    
    titleElement.textContent = `${chapter.title} - ${modeNames[gameMode]}`;
    subtitleElement.textContent = chapter.description;
}

// Chapter Selection Functions
function selectChapter(chapterNum) {
    selectedChapter = chapterNum;
    currentQuestions = chapters[chapterNum].questions;
    
    // Hide chapter selector and show game mode selector
    document.getElementById('chapterSelector').classList.remove('show');
    document.getElementById('gameModeSelector').classList.add('show');
}

function startQuizWithMode(mode) {
    if (!selectedChapter) {
        alert('Please select a chapter first!');
        return;
    }
    
    gameMode = mode;
    gameStarted = true;
    
    // Get random order preference from toggle
    randomOrderEnabled = document.getElementById('randomOrderSwitch').checked;
    
    // Update quiz header with chapter-specific content
    updateQuizHeader();
    
    // Hide game mode selector and show quiz
    document.getElementById('gameModeSelector').classList.remove('show');
    document.getElementById('statsContainer').style.display = 'grid';
    document.getElementById('quizContent').style.display = 'block';
    document.querySelector('.controls').style.display = 'flex';
    
    // Set timer based on mode
    if (gameMode === 'timed') {
        timeLeft = 30;
        document.getElementById('timer').classList.add('show');
    } else if (gameMode === 'speed') {
        timeLeft = 15;
        document.getElementById('timer').classList.add('show');
    }
    
    // Initialize and start the quiz
    initializeQuiz();
}

// Game Mode Functions
function selectGameMode(mode) {
    gameMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('selected');
}

function startSelectedMode() {
    if (!gameMode) {
        alert('Please select a game mode first!');
        return;
    }
    
    gameStarted = true;
    document.getElementById('gameModeSelector').classList.remove('show');
    document.getElementById('statsContainer').style.display = 'grid';
    document.getElementById('quizContent').style.display = 'block';
    document.querySelector('.controls').style.display = 'flex';
    
    // Set timer based on mode
    if (gameMode === 'timed') {
        timeLeft = 30;
        document.getElementById('timer').classList.add('show');
    } else if (gameMode === 'speed') {
        timeLeft = 15;
        document.getElementById('timer').classList.add('show');
    }
    
    initializeQuiz();
}

// Timer Functions
function startTimer() {
    if (gameMode === 'practice') return;
    
    clearInterval(timerInterval);
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 5) {
            document.getElementById('timer').classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = `${timeLeft}s`;
}

function timeUp() {
    clearInterval(timerInterval);
    if (!answered) {
        // Mark question as answered to prevent further interaction
        answered = true;
        
        // Reset streak and update stats
        playerStats.streak = 0;
        playerStats.totalQuestions++;
        updateStats();
        saveProgress();
        
        // Disable all options to prevent clicking
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
            option.style.opacity = '0.5';
        });
        
        // Show correct answer
        const question = shuffledQuestions[currentQuestion];
        options[question.correct].classList.add('correct');
        options[question.correct].style.opacity = '1';
        
        // Show explanation
        document.getElementById('explanationText').innerHTML = question.explanation + ' <strong>(Time expired!)</strong>';
        document.getElementById('explanation').classList.add('show');
        
        // Show more info if available
        const moreInfoBtn = document.getElementById('moreInfoBtn');
        const moreInfoDetails = document.getElementById('moreInfoDetails');
        if (question.moreInfo) {
            moreInfoBtn.style.display = 'inline-block';
            moreInfoDetails.innerHTML = question.moreInfo;
        } else {
            moreInfoBtn.style.display = 'none';
            moreInfoDetails.innerHTML = '';
        }
        
        // Update button text
        if (currentQuestion === currentQuestions.length - 1) {
            document.getElementById('nextBtn').textContent = 'Show Results';
        } else {
            document.getElementById('nextBtn').textContent = 'Next Question';
        }
        
        // Enable next button
        document.getElementById('nextBtn').disabled = false;
        
        showTimeUpMessage();
    }
}

function showTimeUpMessage() {
    const timeUpMsg = document.createElement('div');
    timeUpMsg.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ff6b6b;
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    `;
    timeUpMsg.textContent = '⏰ Time\'s Up!';
    document.querySelector('.question-container').style.position = 'relative';
    document.querySelector('.question-container').appendChild(timeUpMsg);
    
    setTimeout(() => {
        timeUpMsg.remove();
    }, 2000);
}

function initializeQuiz() {
    loadProgress();
    updateStats();
    
    // Use current chapter questions
    if (!currentQuestions.length) {
        alert('No questions available for this chapter!');
        return;
    }
    
    // Shuffle all question options when quiz starts
    let questionsToUse = currentQuestions.map(question => shuffleQuestionOptions(question));
    
    // Shuffle question order if random order is enabled
    if (randomOrderEnabled) {
        shuffledQuestions = shuffleArray(questionsToUse);
    } else {
        shuffledQuestions = questionsToUse;
    }
    
    // Initialize user answers array
    userAnswers = new Array(currentQuestions.length).fill(null);
    displayQuestion();
    updateProgress();
    updateScore();
    updateNavigationButtons();
}

function displayQuestion() {
    const question = shuffledQuestions[currentQuestion];
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${currentQuestions.length}`;
    document.getElementById('questionText').innerHTML = question.question;
    
    // Show code block if present
    const codeBlock = document.getElementById('codeBlock');
    if (question.code) {
        codeBlock.innerHTML = highlightPythonCode(question.code);
        codeBlock.style.display = 'block';
    } else {
        codeBlock.style.display = 'none';
    }
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    // Check if this question was previously answered
    const previousAnswer = userAnswers[currentQuestion];
    if (previousAnswer !== null) {
        selectedAnswer = previousAnswer.selectedIndex;
        answered = previousAnswer.answered;
        
        // Restore the selected option
        const options = document.querySelectorAll('.option');
                options[selectedAnswer].classList.add('selected');
                
        if (answered) {
                // Show the results
                if (selectedAnswer === question.correct) {
                    options[selectedAnswer].classList.add('correct');
                } else {
                    options[selectedAnswer].classList.add('incorrect');
                    options[question.correct].classList.add('correct');
            }
            
            // Show explanation
            document.getElementById('explanationText').innerHTML = question.explanation;
            document.getElementById('explanation').classList.add('show');
            
            // Show more info button and content if available
            const moreInfoBtn = document.getElementById('moreInfoBtn');
            const moreInfoDetails = document.getElementById('moreInfoDetails');
            if (question.moreInfo) {
                moreInfoBtn.style.display = 'inline-block';
                moreInfoDetails.innerHTML = question.moreInfo;
            } else {
                moreInfoBtn.style.display = 'none';
                moreInfoDetails.innerHTML = '';
            }
            
            // Update button text
            if (currentQuestion === currentQuestions.length - 1) {
                document.getElementById('nextBtn').textContent = 'Show Results';
            } else {
                document.getElementById('nextBtn').textContent = 'Next Question';
            }
        } else {
            document.getElementById('nextBtn').disabled = false;
        }
    } else {
        // Reset state for new question
        selectedAnswer = null;
        answered = false;
        document.getElementById('nextBtn').disabled = true;
        document.getElementById('explanation').classList.remove('show');
        
        // Reset more info section
        document.getElementById('moreInfoBtn').style.display = 'none';
        document.getElementById('moreInfoContent').classList.remove('show');
        document.getElementById('moreInfoBtn').textContent = 'More Information';
    }
    
    // Update navigation
    updateNavigationButtons();
    
    // Show hint button if hints available and in practice mode
    const hintBtn = document.getElementById('hintBtn');
    if (gameMode === 'practice' && playerStats.hintsRemaining > 0 && !answered) {
        hintBtn.style.display = 'inline-block';
        hintBtn.textContent = `💡 Use Hint (-10 XP) [${playerStats.hintsRemaining}]`;
    } else {
        hintBtn.style.display = 'none';
    }
    
    // Start timer for new question
    if (gameMode !== 'practice') {
        timeLeft = gameMode === 'speed' ? 15 : 30;
        document.getElementById('timer').classList.remove('warning');
        startTimer();
    }
}

// XP and Leveling System
function addXP(amount) {
    playerStats.xp += amount;
    
    // Check for level up (every 100 XP)
    const newLevel = Math.floor(playerStats.xp / 100) + 1;
    if (newLevel > playerStats.level) {
        playerStats.level = newLevel;
        playerStats.hintsRemaining += 2; // Bonus hints on level up
        showLevelUpNotification();
    }
    
    updateStats();
    saveProgress();
}

function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.5s ease;
    `;
    notification.innerHTML = `🎉 Level Up! You're now level ${playerStats.level}!<br><small>+2 Bonus Hints!</small>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Hint System
function useHint() {
    if (playerStats.hintsRemaining <= 0 || answered) return;
    
    // Check if user has enough XP to use hint (prevent negative XP)
    if (playerStats.xp < 10) {
        alert('You need at least 10 XP to use a hint!');
        return;
    }
    
    playerStats.hintsRemaining--;
    addXP(-10); // Penalty for using hint
    
    const question = shuffledQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Remove two wrong answers
    let wrongAnswers = [];
    options.forEach((option, index) => {
        if (index !== question.correct) {
            wrongAnswers.push(index);
        }
    });
    
    // Randomly select 2 wrong answers to eliminate
    const toEliminate = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 2);
    toEliminate.forEach(index => {
        options[index].style.opacity = '0.3';
        options[index].style.pointerEvents = 'none';
        options[index].innerHTML += ' ❌';
    });
    
    // Update hint button text or hide if no hints left
    const hintBtn = document.getElementById('hintBtn');
    if (playerStats.hintsRemaining > 0) {
        hintBtn.textContent = `💡 Use Hint (-10 XP) [${playerStats.hintsRemaining}]`;
    } else {
        hintBtn.style.display = 'none';
    }
    updateStats();
}

// Stats Update
function updateStats() {
    document.getElementById('levelDisplay').textContent = playerStats.level;
    document.getElementById('xpDisplay').textContent = playerStats.xp;
    document.getElementById('streakDisplay').textContent = playerStats.streak;
    document.getElementById('hintsDisplay').textContent = playerStats.hintsRemaining;
}

function selectAnswer(index) {
    if (answered) return;
    
    selectedAnswer = index;
    const question = shuffledQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Remove previous selections
    options.forEach(option => option.classList.remove('selected'));
    
    // Mark selected option
    options[index].classList.add('selected');
    
    // Stop timer
    clearInterval(timerInterval);
    
    // Immediately show the answer and calculate XP
    let xpGained = 0;
    if (selectedAnswer === question.correct) {
        score++;
        playerStats.totalCorrect++;
        playerStats.streak++;
        options[selectedAnswer].classList.add('correct');
        
        // Calculate XP based on game mode and speed
        xpGained = 20; // Base XP for correct answer
        if (gameMode === 'timed') xpGained += 10;
        if (gameMode === 'speed') xpGained += 20;
        
        // Bonus XP for streaks
        if (playerStats.streak >= 5) xpGained += 10;
        if (playerStats.streak >= 10) xpGained += 20;
        
        // Time bonus (only for timed modes)
        if (gameMode !== 'practice' && timeLeft > 10) {
            xpGained += Math.floor(timeLeft / 2);
        }
        
        addXP(xpGained);
        
        // Update best streak
        if (playerStats.streak > playerStats.bestStreak) {
            playerStats.bestStreak = playerStats.streak;
        }
    } else {
        playerStats.streak = 0;
        options[selectedAnswer].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    playerStats.totalQuestions++;
    updateStats();
    saveProgress();
    
    // Show explanation immediately
    document.getElementById('explanationText').innerHTML = question.explanation;
    document.getElementById('explanation').classList.add('show');
    
    // Show more info button and content if available
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfoDetails = document.getElementById('moreInfoDetails');
    if (question.moreInfo) {
        moreInfoBtn.style.display = 'inline-block';
        moreInfoDetails.innerHTML = question.moreInfo;
    } else {
        moreInfoBtn.style.display = 'none';
        moreInfoDetails.innerHTML = '';
    }
    
    answered = true;
    updateScore();
    
    // Save user's answer as completed
    userAnswers[currentQuestion] = {
        selectedIndex: selectedAnswer,
        answered: true
    };
    
    // Update button text
    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextBtn').textContent = 'Show Results';
    } else {
        document.getElementById('nextBtn').textContent = 'Next Question';
    }
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextNavBtn = document.getElementById('nextNavBtn');
    const questionCounter = document.getElementById('questionCounter');
    
    // Update question counter
    questionCounter.textContent = `${currentQuestion + 1} / ${currentQuestions.length}`;
    
    // Enable/disable previous button
    prevBtn.disabled = currentQuestion === 0;
    
    // Update next navigation button
    if (currentQuestion === questions.length - 1) {
        nextNavBtn.textContent = '✓';
        nextNavBtn.title = 'Show Results';
    } else {
        nextNavBtn.textContent = '>';
        nextNavBtn.title = 'Next Question';
    }
}

function nextQuestion() {
    if (answered) {
        // Move to next question or show results
        if (currentQuestion < currentQuestions.length - 1) {
            currentQuestion++;
            displayQuestion();
            updateProgress();
            document.getElementById('nextBtn').textContent = 'Next Question';
        } else {
            showResults();
        }
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateScore() {
    document.getElementById('currentScore').textContent = score;
}

function showResults() {
    document.getElementById('quizContent').style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('finalScore').textContent = `${score}/${currentQuestions.length}`;
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excellent! You have mastered DSA concepts!';
    } else if (percentage >= 70) {
        message = '👏 Great job! You have a solid understanding!';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Keep studying to improve!';
    } else {
        message = '📚 Keep learning! Practice makes perfect!';
    }
    
    document.getElementById('scoreMessage').textContent = message;
    
    // Start the duck rain celebration!
    startDuckRain();
}

function toggleMoreInfo() {
    const moreInfoContent = document.getElementById('moreInfoContent');
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    
    if (moreInfoContent.classList.contains('show')) {
        moreInfoContent.classList.remove('show');
        moreInfoBtn.textContent = 'More Information';
    } else {
        moreInfoContent.classList.add('show');
        moreInfoBtn.textContent = 'Less Information';
    }
}

// Duck Rain Animation Functions
let duckRainInterval;
let duckRainContainer;
let duckImageTemplate; // Preloaded image template

// Preload the duck image once
function preloadDuckImage() {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            duckImageTemplate = document.createElement('img');
            duckImageTemplate.src = img.src;
            duckImageTemplate.className = 'duck';
            duckImageTemplate.alt = 'Falling Duck';
            resolve();
        };
        img.src = 'https://ordegg.sirv.com/Images/ordekPfpGithub-removebg-crop%20copy.png';
    });
}

async function startDuckRain() {
    // Preload image if not already loaded
    if (!duckImageTemplate) {
        await preloadDuckImage();
    }
    
    // Create duck rain container
    duckRainContainer = document.createElement('div');
    duckRainContainer.className = 'duck-rain';
    document.querySelector('.quiz-container').appendChild(duckRainContainer);
    
    // Start creating ducks
    duckRainInterval = setInterval(createDuck, 300); // Create a duck every 300ms
}

function createDuck() {
    // Clone the preloaded image template
    const duck = duckImageTemplate.cloneNode(true);
    
    // Random size (60px to 240px) - 3x bigger
    const size = Math.random() * 100 + 40;
    duck.style.width = size + 'px';
    duck.style.height = size + 'px';
    
    // Random horizontal position
    duck.style.left = Math.random() * 100 + '%';
    
    // Random animation speed and type
    const speedTypes = ['slow', 'fast', ''];
    const speedType = speedTypes[Math.floor(Math.random() * speedTypes.length)];
    if (speedType) {
        duck.classList.add(speedType);
    }
    
    // Random animation duration (2s to 6s)
    const duration = Math.random() * 4 + 2;
    duck.style.animationDuration = duration + 's';
    
    // Random delay before starting
    const delay = Math.random() * 1;
    duck.style.animationDelay = delay + 's';
    
    duckRainContainer.appendChild(duck);
    
    // Remove duck after animation completes
    setTimeout(() => {
        if (duck.parentNode) {
            duck.parentNode.removeChild(duck);
        }
    }, (duration + delay) * 1000);
}

function stopDuckRain() {
    if (duckRainInterval) {
        clearInterval(duckRainInterval);
        duckRainInterval = null;
    }
    if (duckRainContainer) {
        duckRainContainer.remove();
        duckRainContainer = null;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    userAnswers = [];
    gameStarted = false;
    selectedChapter = null;
    currentQuestions = [];
    
    // Reset quiz header to default
    document.getElementById('quizTitle').textContent = '🧠 DSA Quiz Challenge';
    document.getElementById('quizSubtitle').textContent = 'Test your Data Structures & Algorithms knowledge';
    
    // Stop the duck rain and timer
    stopDuckRain();
    clearInterval(timerInterval);
    
    // Reset UI - go back to chapter selection
    document.getElementById('quizContent').style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('gameModeSelector').classList.remove('show');
    document.getElementById('chapterSelector').classList.add('show');
    document.getElementById('statsContainer').style.display = 'none';
    document.getElementById('timer').classList.remove('show', 'warning');
    document.getElementById('nextBtn').textContent = 'Next Question';
    
    // Reset chapter selection
    document.querySelectorAll('.chapter-card').forEach(card => card.classList.remove('selected'));
    
    // Reset hints for new game
    playerStats.hintsRemaining = Math.max(3, playerStats.hintsRemaining);
    updateStats();
}

// Initialize app when page loads
window.onload = function() {
    loadProgress();
    updateStats();
    document.getElementById('chapterSelector').classList.add('show');
    document.getElementById('quizContent').style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
};

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key >= '1' && event.key <= '4') {
        const optionIndex = parseInt(event.key) - 1;
        if (optionIndex < questions[currentQuestion].options.length && !answered) {
            selectAnswer(optionIndex);
        }
    } else if (event.key === 'Enter' || event.key === ' ') {
        if (answered && !document.getElementById('nextBtn').disabled) {
            nextQuestion();
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentQuestion > 0) {
            previousQuestion();
        }
    } else if (event.key === 'ArrowRight') {
        if (answered && (currentQuestion < currentQuestions.length - 1 || (currentQuestion === currentQuestions.length - 1 && answered))) {
            nextQuestion();
        }
    }
});
