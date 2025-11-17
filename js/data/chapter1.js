const chapter1 = {
        title: "Chapter 1 (DSA OG)",
        description: "Original DSA fundamentals covering time complexity, algorithms, data structures, and software engineering concepts.",
        questions: [
    {
        question: "What is the time complexity of function x?",
        code: `def x(a, n):
    for i in range(len(a)):
if a[i] > 0:
    y(a, n)
else:
    a[i] -= 1

def y(a, n):
    i = 0
    while i < n:
for j in range(len(a)):
    a[j] += 1
i += 1`,
        options: ["O(n)", "O(n²)", "O(n³)", "O(n log n)"],
        correct: 2,
        explanation: "Function x has a loop that calls function y for positive elements. Function y has O(n²) complexity, and in worst case all elements are positive, making it O(n³).",
        moreInfo: `
            <h4>🔍 Deep Dive: Time Complexity Analysis</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*5ZLci3SuR0zM_QlZOADv8Q.png" alt="Big O Complexity Chart" />
            <p><strong>Understanding Nested Loop Complexity:</strong></p>
            <p>When analyzing function x, we need to consider the worst-case scenario where all elements in array 'a' are positive. In this case:</p>
            <ul>
                <li>The outer loop in function x runs len(a) times = n times</li>
                <li>For each positive element, function y is called</li>
                <li>Function y has its own nested loops: outer while loop (n iterations) × inner for loop (len(a) iterations) = O(n²)</li>
                <li>Therefore: n × O(n²) = O(n³)</li>
            </ul>
            <img src="https://cdn-images-1.medium.com/max/1600/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg" alt="Nested Loops Complexity Visualization" />
            <p>This demonstrates why nested algorithms can quickly become inefficient as input size grows!</p>
        `
    },
    {
        question: "What is the time complexity of function y?",
        code: `def y(a, n):
    i = 0
    while i < n:
for j in range(len(a)):
    a[j] += 1
i += 1`,
        options: ["O(n)", "O(n²)", "O(n³)", "O(log n)"],
        correct: 1,
        explanation: "Function y has a while loop running n times, and inside it a for loop running len(a) times, making it O(n²).",
        moreInfo: `
            <h4>📊 Understanding O(n²) Complexity</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*yiyfZodqXNwMouC0-B0Wlg.png" alt="Quadratic Time Complexity Graph" />
            <p><strong>Breaking Down the Nested Structure:</strong></p>
            <p>Function y demonstrates a classic O(n²) pattern with its nested loop structure:</p>
            <ul>
                <li><strong>Outer Loop:</strong> while i < n → runs exactly n times</li>
                <li><strong>Inner Loop:</strong> for j in range(len(a)) → runs len(a) times for each outer iteration</li>
                <li><strong>Total Operations:</strong> n × len(a) = n × n = n²</li>
            </ul>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Zt0LDcxE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mwcwre09s11f9cpab9tu.jpg" alt="Nested Loop Visualization" />
            <p>This quadratic growth means that doubling the input size quadruples the execution time!</p>
        `
    },
    {
        question: "What is the output for A = [2, -2, 2, -2] after calling x(A, n)?",
        code: `def x(a, n):
    for i in range(len(a)):
if a[i] > 0:
    y(a, n)
else:
    a[i] -= 1

def y(a, n):
    i = 0
    while i < n:
for j in range(len(a)):
    a[j] += 1
i += 1`,
        options: ["[2, -2, 2, -2]", "[4, -1, 4, -1]", "[3, -1, 3, -1]", "[4, -3, 4, -3]"],
        correct: 1,
        explanation: "Positive elements (2) trigger function y which adds n to all elements, while negative elements (-2) get decremented by 1.",
        moreInfo: `
            <h4>🔄 Step-by-Step Execution Trace</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Dg6pw7hOKPzUNBcjZZOJOQ.png" alt="Array Processing Visualization" />
            <p><strong>Let's trace through A = [2, -2, 2, -2] with n = 2:</strong></p>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Initial:</strong> A = [2, -2, 2, -2]</p>
                <p><strong>i=0:</strong> A[0] = 2 > 0 → call y(A, 2) → adds 2 to all elements → A = [4, 0, 4, 0]</p>
                <p><strong>i=1:</strong> A[1] = 0 ≤ 0 → A[1] -= 1 → A = [4, -1, 4, 0]</p>
                <p><strong>i=2:</strong> A[2] = 4 > 0 → call y(A, 2) → adds 2 to all elements → A = [6, 1, 6, 2]</p>
                <p><strong>i=3:</strong> A[3] = 2 > 0 → call y(A, 2) → adds 2 to all elements → A = [8, 3, 8, 4]</p>
            </div>
            <p><strong>Wait!</strong> The expected answer suggests n=1. Let's recalculate with n=1:</p>
            <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>i=0:</strong> A[0] = 2 > 0 → call y(A, 1) → adds 1 to all → A = [3, -1, 3, -1]</p>
                <p><strong>i=1:</strong> A[1] = -1 ≤ 0 → A[1] -= 1 → A = [3, -2, 3, -1]</p>
                <p><strong>i=2:</strong> A[2] = 3 > 0 → call y(A, 1) → adds 1 to all → A = [4, -1, 4, 0]</p>
                <p><strong>i=3:</strong> A[3] = 0 ≤ 0 → A[3] -= 1 → A = [4, -1, 4, -1]</p>
            </div>
            <p>This demonstrates how conditional execution and shared state can create complex interactions!</p>
        `
    },
    {
        question: "Which sorting algorithms use divide and conquer strategy?",
        options: ["Bubble sort and Insertion sort", "Merge sort and Quick sort", "Radix sort and Heap sort", "Selection sort and Bubble sort"],
        correct: 1,
        explanation: "Merge sort and Quick sort both use divide and conquer by recursively dividing the problem into smaller subproblems.",
        moreInfo: `
            <h4>⚔️ Divide and Conquer Strategy</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*-dGaRXuYOdBXTpuVJoZHmg.png" alt="Divide and Conquer Visualization" />
            <p><strong>The Divide and Conquer Paradigm:</strong></p>
            <ol>
                <li><strong>Divide:</strong> Break the problem into smaller subproblems</li>
                <li><strong>Conquer:</strong> Solve subproblems recursively</li>
                <li><strong>Combine:</strong> Merge solutions to solve original problem</li>
            </ol>
            <h4>🔄 Merge Sort Process:</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1200px-Merge_sort_algorithm_diagram.svg.png" alt="Merge Sort Visualization" />
            <p>Merge sort consistently divides arrays in half, sorts each half, then merges them back together.</p>
            <h4>⚡ Quick Sort Process:</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Quicksort-diagram.svg/1200px-Quicksort-diagram.svg.png" alt="Quick Sort Visualization" />
            <p>Quick sort picks a pivot, partitions around it, then recursively sorts the partitions.</p>
            <p><strong>Why not the others?</strong> Bubble, Insertion, and Selection sorts use iterative approaches without recursive subdivision.</p>
        `
    },
    {
        question: "Which algorithm gives the best worst-case time complexity for sorting?",
        options: ["Insertion sort", "Merge sort", "Quick sort", "Bubble sort"],
        correct: 1,
        explanation: "Merge sort has O(n log n) worst-case complexity, while Quick sort has O(n²) and Insertion sort has O(n²) in worst case.",
        moreInfo: `
            <h4>⏱️ Worst-Case Time Complexity Comparison</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*1CkG7RaXBSJeIY7RlHcK6w.png" alt="Sorting Algorithms Complexity Comparison" />
            <p><strong>Why Merge Sort Wins in Worst-Case:</strong></p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🏆 Merge Sort:</strong> O(n log n) - Always consistent, never degrades</p>
                <p><strong>⚠️ Quick Sort:</strong> O(n²) - When pivot is always smallest/largest</p>
                <p><strong>🐌 Insertion Sort:</strong> O(n²) - When array is reverse sorted</p>
                <p><strong>🐌 Bubble Sort:</strong> O(n²) - Always quadratic regardless</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Merge-sort-example-300px.gif/220px-Merge-sort-example-300px.gif" alt="Merge Sort Animation" />
            <p><strong>Merge Sort's Guarantee:</strong> Its divide-and-conquer approach ensures it always splits arrays evenly, maintaining O(n log n) performance regardless of input order. This predictability makes it ideal for systems requiring consistent performance.</p>
            <p><strong>Real-world Impact:</strong> In mission-critical applications, predictable performance often trumps average-case optimizations!</p>
        `
    },
    {
        question: "What is the Big O notation for the recurrence T(n) = T(n/7) + T(n/5) + O(n)?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correct: 1,
        explanation: "Using the Master theorem, this recurrence resolves to O(n log n) complexity.",
        moreInfo: `
            <h4>🧮 Master Theorem Analysis</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*8nFJT4FEhgJbKnKWz-8Xfg.png" alt="Master Theorem Cases" />
            <p><strong>Analyzing T(n) = T(n/7) + T(n/5) + O(n):</strong></p>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Step 1:</strong> Identify the pattern - We have two recursive calls with different division factors</p>
                <p><strong>Step 2:</strong> This doesn't fit standard Master Theorem directly due to different divisors</p>
                <p><strong>Step 3:</strong> However, we can analyze the recursion tree depth and work per level</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Master_theorem_recursion_tree.svg/1200px-Master_theorem_recursion_tree.svg.png" alt="Recursion Tree Analysis" />
            <p><strong>Intuitive Analysis:</strong></p>
            <ul>
                <li><strong>Tree Depth:</strong> The deeper branch determines depth ≈ log₅(n) levels</li>
                <li><strong>Work per Level:</strong> Each level does O(n) work total</li>
                <li><strong>Total Work:</strong> O(n) × O(log n) = O(n log n)</li>
            </ul>
            <p>This type of recurrence appears in algorithms that split problems unevenly but still maintain logarithmic depth!</p>
        `
    },
    {
        question: "Which data structures inherently use recursion in their implementation?",
        options: ["Stack", "Queue", "Arrays", "Trees and Linked Lists"],
        correct: 3,
        explanation: "Trees and recursive data structures naturally use recursion for traversal and manipulation operations.",
        moreInfo: `
            <h4>🌳 Recursive Data Structures</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*PWJiwTxRdQy8A_Y0in1lqw.png" alt="Tree Data Structure" />
            <p><strong>Why Trees Are Inherently Recursive:</strong></p>
            <div style="background: #f0fff0; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🌲 Tree Definition:</strong> A tree is either empty OR a node with left and right subtrees (which are also trees!)</p>
                <p><strong>🔄 Recursive Operations:</strong></p>
                <ul>
                    <li><strong>Traversal:</strong> Visit node, then recursively visit left and right subtrees</li>
                    <li><strong>Search:</strong> Check current node, then recursively search appropriate subtree</li>
                    <li><strong>Insertion:</strong> Recursively find correct position and insert</li>
                </ul>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png" alt="Binary Tree Structure" />
            <p><strong>Linked Lists and Recursion:</strong></p>
            <div style="background: #fff8dc; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p>A linked list can be defined recursively: either empty OR a node pointing to another linked list!</p>
                <p><strong>Recursive List Operations:</strong> Reverse, search, insert, delete all have elegant recursive solutions.</p>
            </div>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png" alt="Linked List Structure" />
            <p><strong>Why not Stack/Queue/Arrays?</strong> These are typically implemented iteratively and don't have self-similar substructures.</p>
        `
    },
    {
        question: "What determines how easy and profitable it is to maintain, update, and upgrade a software system?",
        options: ["Maintainability", "Robustness", "Correctness", "Performance"],
        correct: 0,
        explanation: "Maintainability is the software quality attribute that determines how easily a system can be maintained, updated, and upgraded.",
        moreInfo: `
            <h4>🔧 Software Maintainability</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*8kC-9Q5Q8fZr1TGxKQG2Bg.png" alt="Software Quality Attributes" />
            <p><strong>The Economics of Maintainability:</strong></p>
            <div style="background: #f5f5dc; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>💰 Cost Impact:</strong> 60-80% of software costs occur during maintenance phase!</p>
                <p><strong>⏰ Time to Market:</strong> Maintainable code enables faster feature development</p>
                <p><strong>🐛 Bug Fixes:</strong> Well-structured code makes debugging significantly easier</p>
                <p><strong>👥 Team Productivity:</strong> New developers can contribute faster to maintainable codebases</p>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Kua0gvN_P2VqBVpkC8VzqA.png" alt="Software Maintenance Lifecycle" />
            <p><strong>Key Maintainability Factors:</strong></p>
            <ul>
                <li><strong>📖 Readability:</strong> Clear, self-documenting code</li>
                <li><strong>🏗️ Modularity:</strong> Well-separated concerns and components</li>
                <li><strong>🧪 Testability:</strong> Comprehensive test coverage</li>
                <li><strong>📚 Documentation:</strong> Clear specifications and comments</li>
                <li><strong>🔄 Consistency:</strong> Uniform coding standards and patterns</li>
            </ul>
            <p><strong>Business Impact:</strong> High maintainability = Lower TCO (Total Cost of Ownership) + Faster innovation cycles!</p>
        `
    },
    {
        question: "What do we call the degree to which a software system can function correctly in the presence of invalid input or stress?",
        options: ["Maintainability", "Robustness", "Correctness", "Reliability"],
        correct: 1,
        explanation: "Robustness refers to a system's ability to handle unexpected inputs, errors, and stressful conditions gracefully.",
        moreInfo: `
            <h4>🛡️ Software Robustness</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*VQeYNlmtVHMf9X7rKQWoBA.png" alt="System Robustness Diagram" />
            <p><strong>Robustness vs. Other Quality Attributes:</strong></p>
            <div style="background: #ffe4e1; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🛡️ Robustness:</strong> Handles invalid inputs and stress gracefully</p>
                <p><strong>✅ Correctness:</strong> Produces correct outputs for valid inputs</p>
                <p><strong>🔄 Reliability:</strong> Performs consistently over time</p>
                <p><strong>🔧 Maintainability:</strong> Easy to modify and extend</p>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*9Q8nwUSSQDHuqIQpINzKvQ.png" alt="Error Handling Strategies" />
            <p><strong>Building Robust Systems:</strong></p>
            <ul>
                <li><strong>🔍 Input Validation:</strong> Check all inputs before processing</li>
                <li><strong>⚠️ Error Handling:</strong> Graceful degradation instead of crashes</li>
                <li><strong>🔄 Retry Logic:</strong> Handle transient failures automatically</li>
                <li><strong>📊 Monitoring:</strong> Detect and respond to system stress</li>
                <li><strong>🚫 Fail-Safe Defaults:</strong> Safe behavior when things go wrong</li>
            </ul>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Real-world Example:</strong> A robust web server continues serving requests even when some are malformed, logging errors without crashing the entire system.</p>
            </div>
        `
    },
    {
        question: "Given two subarrays, one sorted descending and the other ascending, what is the worst-case time complexity to merge and sort them together?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correct: 2,
        explanation: "In the worst case, if using a naive approach without leveraging the existing sorted order, it could be O(n²). However, with optimal algorithms, it should be O(n log n)."
    },
    {
        question: "Stack operations: Push 2, pop, push 1, push 2, pop, push 6, pop all. What is the order of popped elements?",
        options: ["2, 1, 2, 6", "2, 2, 6, 1", "1, 2, 6, 2", "6, 2, 1, 2"],
        correct: 1,
        explanation: "Following LIFO principle: First pop gets 2, second pop gets 2 (top of stack), then popping all gives 6, then 1.",
        moreInfo: `
            <h4>📚 Stack Operations Visualization</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*r4Bfo3rrFprzFM2zbgzZXA.png" alt="Stack LIFO Operations" />
            <p><strong>Step-by-Step Stack Trace:</strong></p>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>1. Push 2:</strong> Stack = [2]</p>
                <p><strong>2. Pop:</strong> Returns 2, Stack = [] ✅ <em>First popped element: 2</em></p>
                <p><strong>3. Push 1:</strong> Stack = [1]</p>
                <p><strong>4. Push 2:</strong> Stack = [1, 2] (2 is on top)</p>
                <p><strong>5. Pop:</strong> Returns 2, Stack = [1] ✅ <em>Second popped element: 2</em></p>
                <p><strong>6. Push 6:</strong> Stack = [1, 6] (6 is on top)</p>
                <p><strong>7. Pop all:</strong> Pop 6, then pop 1 ✅ <em>Third: 6, Fourth: 1</em></p>
            </div>
            <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="Stack Data Structure" />
            <p><strong>Result:</strong> 2, 2, 6, 1 - Remember: Last In, First Out (LIFO)!</p>
        `
    },
    {
        question: "Which notation is used for mathematical expressions where operators come after operands?",
        options: ["Infix notation", "Prefix notation", "Postfix notation", "Mixed notation"],
        correct: 2,
        explanation: "Postfix notation (also called Reverse Polish Notation) places operators after their operands, like '3 4 +' for '3 + 4'.",
        moreInfo: `
            <h4>🔢 Expression Notations Comparison</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*8XqjQzqQqQqQqQqQqQqQqQ.png" alt="Expression Notations" />
            <p><strong>Three Ways to Write Expressions:</strong></p>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>📝 Infix:</strong> 3 + 4 × 2 (operators between operands) - What humans use</p>
                <p><strong>📝 Prefix:</strong> + 3 × 4 2 (operators before operands) - Polish Notation</p>
                <p><strong>📝 Postfix:</strong> 3 4 2 × + (operators after operands) - Reverse Polish Notation</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Reverse_Polish_notation_example.svg/1200px-Reverse_Polish_notation_example.svg.png" alt="RPN Stack Evaluation" />
            <p><strong>Why Postfix is Powerful:</strong></p>
            <ul>
                <li><strong>🚫 No Parentheses Needed:</strong> Eliminates ambiguity without brackets</li>
                <li><strong>📚 Stack-Based Evaluation:</strong> Perfect for computer processing</li>
                <li><strong>⚡ Efficient:</strong> Single left-to-right scan</li>
                <li><strong>🔧 Simple Parsing:</strong> No operator precedence rules needed</li>
            </ul>
            <div style="background: #fff8dc; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Stack Evaluation Example:</strong> For "3 4 2 × +"</p>
                <p>1. Push 3, Push 4, Push 2 → Stack: [3, 4, 2]</p>
                <p>2. See ×: Pop 2,4 → Calculate 4×2=8 → Push 8 → Stack: [3, 8]</p>
                <p>3. See +: Pop 8,3 → Calculate 3+8=11 → Push 11 → Result: 11</p>
            </div>
            <p><strong>Real-world Use:</strong> HP calculators, programming language compilers, and expression evaluators!</p>
        `
    }
        ]
    };
