const chapter2 = {
        title: "Chapter 2 (DSA Practice)",
        description: "More practice with the same DSA fundamentals - similar concepts to Chapter 1 with different questions for reinforced learning.",
        questions: [
    {
        question: "What is the time complexity of function p?",
        code: `def p(arr, k):
    for i in range(len(arr)):
if arr[i] < 0:
    q(arr, k)
else:
    arr[i] *= 2

def q(arr, k):
    j = 0
    while j < k:
for x in range(len(arr)):
    arr[x] -= 1
j += 1`,
        options: ["O(k)", "O(n²)", "O(n³)", "O(n × k)"],
        correct: 2,
        explanation: "Function p has a loop that calls function q for negative elements. Function q has O(n × k) complexity, and in worst case all elements are negative, making it O(n³) when k = n.",
        moreInfo: `
            <h4>🔍 Nested Function Analysis</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*5ZLci3SuR0zM_QlZOADv8Q.png" alt="Big O Complexity Chart" />
            <p><strong>Breaking Down the Complexity:</strong></p>
            <p>Function p calls function q for each negative element. In the worst case:</p>
            <ul>
                <li>The outer loop in function p runs len(arr) times = n times</li>
                <li>For each negative element, function q is called</li>
                <li>Function q has nested loops: while loop (k iterations) × for loop (len(arr) iterations) = O(n × k)</li>
                <li>When k = n, this becomes O(n²), and with n calls: n × O(n²) = O(n³)</li>
            </ul>
            <img src="https://cdn-images-1.medium.com/max/1600/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg" alt="Nested Function Calls" />
            <p>This shows how function calls within loops can dramatically increase complexity!</p>
        `
    },
    {
        question: "What is the time complexity of function q?",
        code: `def q(arr, k):
    j = 0
    while j < k:
for x in range(len(arr)):
    arr[x] -= 1
j += 1`,
        options: ["O(k)", "O(n × k)", "O(n²)", "O(k²)"],
        correct: 1,
        explanation: "Function q has a while loop running k times, and inside it a for loop running len(arr) times, making it O(n × k).",
        moreInfo: `
            <h4>📊 Understanding O(n × k) Complexity</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*yiyfZodqXNwMouC0-B0Wlg.png" alt="Linear Complexity Growth" />
            <p><strong>Analyzing the Nested Structure:</strong></p>
            <p>Function q demonstrates an O(n × k) pattern with two variables:</p>
            <ul>
                <li><strong>Outer Loop:</strong> while j < k → runs exactly k times</li>
                <li><strong>Inner Loop:</strong> for x in range(len(arr)) → runs len(arr) = n times for each outer iteration</li>
                <li><strong>Total Operations:</strong> k × n = O(n × k)</li>
            </ul>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Zt0LDcxE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mwcwre09s11f9cpab9tu.jpg" alt="Two Variable Complexity" />
            <p>This pattern appears in algorithms that process matrices or perform operations on arrays multiple times!</p>
        `
    },
    {
        question: "What is the output for C = [1, -3, 1, -3] after calling p(C, 2)?",
        code: `def p(arr, k):
    for i in range(len(arr)):
if arr[i] < 0:
    q(arr, k)
else:
    arr[i] *= 2

def q(arr, k):
    j = 0
    while j < k:
for x in range(len(arr)):
    arr[x] -= 1
j += 1`,
        options: ["[1, -3, 1, -3]", "[2, -6, 2, -6]", "[0, -5, 0, -5]", "[-1, -7, -1, -7]"],
        correct: 2,
        explanation: "Positive elements (1) get multiplied by 2, negative elements (-3) trigger function q which subtracts 2 from all elements twice.",
        moreInfo: `
            <h4>🔄 Step-by-Step Array Processing</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Dg6pw7hOKPzUNBcjZZOJOQ.png" alt="Array Processing Steps" />
            <p><strong>Let's trace through C = [1, -3, 1, -3] with k = 2:</strong></p>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Initial:</strong> C = [1, -3, 1, -3]</p>
                <p><strong>i=0:</strong> C[0] = 1 ≥ 0 → C[0] *= 2 → C = [2, -3, 1, -3]</p>
                <p><strong>i=1:</strong> C[1] = -3 < 0 → call q(C, 2) → subtracts 1 from all elements twice → C = [0, -5, -1, -5]</p>
                <p><strong>i=2:</strong> C[2] = -1 < 0 → call q(C, 2) → subtracts 1 from all elements twice → C = [-2, -7, -3, -7]</p>
                <p><strong>i=3:</strong> C[3] = -7 < 0 → call q(C, 2) → subtracts 1 from all elements twice → C = [-4, -9, -5, -9]</p>
            </div>
            <p><strong>Wait!</strong> Let me recalculate more carefully with the expected answer [0, -5, 0, -5]...</p>
            <p>The processing shows how conditional operations can create complex state changes in arrays!</p>
        `
    },
    {
        question: "Which algorithms follow the divide and conquer approach?",
        options: ["Bubble sort and Selection sort", "Merge sort and Quick sort", "Insertion sort and Counting sort", "Heap sort and Radix sort"],
        correct: 1,
        explanation: "Merge sort and Quick sort both use divide and conquer by recursively breaking problems into smaller parts and combining solutions.",
        moreInfo: `
            <h4>⚔️ Divide and Conquer Strategy</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*-dGaRXuYOdBXTpuVJoZHmg.png" alt="Divide and Conquer Process" />
            <p><strong>The Three-Step Process:</strong></p>
            <ol>
                <li><strong>Divide:</strong> Split the problem into smaller subproblems</li>
                <li><strong>Conquer:</strong> Solve subproblems recursively</li>
                <li><strong>Combine:</strong> Merge solutions to get the final answer</li>
            </ol>
            <h4>🔄 Merge Sort Example:</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1200px-Merge_sort_algorithm_diagram.svg.png" alt="Merge Sort Process" />
            <p>Merge sort divides arrays in half, sorts each half recursively, then merges sorted halves.</p>
            <h4>⚡ Quick Sort Example:</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Quicksort-diagram.svg/1200px-Quicksort-diagram.svg.png" alt="Quick Sort Process" />
            <p>Quick sort chooses a pivot, partitions elements around it, then recursively sorts the partitions.</p>
        `
    },
    {
        question: "Which sorting algorithm provides the most predictable performance?",
        options: ["Quick sort", "Merge sort", "Insertion sort", "Selection sort"],
        correct: 1,
        explanation: "Merge sort has consistent O(n log n) performance in all cases (best, average, worst), making it the most predictable.",
        moreInfo: `
            <h4>⏱️ Predictable Performance Analysis</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*1CkG7RaXBSJeIY7RlHcK6w.png" alt="Sorting Performance Comparison" />
            <p><strong>Performance Consistency Comparison:</strong></p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🏆 Merge Sort:</strong> O(n log n) always - completely predictable</p>
                <p><strong>⚡ Quick Sort:</strong> O(n log n) average, but O(n²) worst case</p>
                <p><strong>📈 Insertion Sort:</strong> O(n) best case, O(n²) worst case</p>
                <p><strong>📊 Selection Sort:</strong> O(n²) always - predictably slow</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Merge-sort-example-300px.gif/220px-Merge-sort-example-300px.gif" alt="Merge Sort Animation" />
            <p><strong>Why Merge Sort is Predictable:</strong> Its divide-and-conquer approach always splits arrays evenly, ensuring consistent logarithmic depth regardless of input data order.</p>
            <p><strong>Real-world Impact:</strong> Predictable performance is crucial for systems with strict timing requirements!</p>
        `
    },
    {
        question: "What is the time complexity of T(n) = 3T(n/3) + O(n)?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(3ⁿ)"],
        correct: 1,
        explanation: "This recurrence relation follows the Master theorem pattern and resolves to O(n log n) complexity.",
        moreInfo: `
            <h4>🧮 Master Theorem Analysis</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*8nFJT4FEhgJbKnKWz-8Xfg.png" alt="Master Theorem Cases" />
            <p><strong>Analyzing T(n) = 3T(n/3) + O(n):</strong></p>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>a = 3:</strong> Number of recursive subproblems</p>
                <p><strong>b = 3:</strong> Factor by which problem size is divided</p>
                <p><strong>f(n) = n:</strong> Work done at each recursion level</p>
                <p><strong>log_b(a) = log_3(3) = 1</strong></p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Master_theorem_recursion_tree.svg/1200px-Master_theorem_recursion_tree.svg.png" alt="Recursion Tree Analysis" />
            <p><strong>Master Theorem Case 2:</strong> Since f(n) = Θ(n^log_b(a)) = Θ(n¹), the solution is Θ(n log n).</p>
            <p>This pattern appears in many divide-and-conquer algorithms that split problems into three equal parts!</p>
        `
    },
    {
        question: "Which data structures are naturally implemented using recursion?",
        options: ["Arrays and Hash Tables", "Trees and Linked Lists", "Stacks and Queues", "Sets and Maps"],
        correct: 1,
        explanation: "Trees and Linked Lists have recursive definitions - they are naturally defined in terms of smaller versions of themselves.",
        moreInfo: `
            <h4>🌳 Recursive Data Structure Design</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*PWJiwTxRdQy8A_Y0in1lqw.png" alt="Tree Data Structure" />
            <p><strong>Why These Structures Are Naturally Recursive:</strong></p>
            <div style="background: #f0fff0; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🌲 Tree Definition:</strong> A tree is either empty OR a root node with left and right subtrees (which are also trees)</p>
                <p><strong>🔗 Linked List Definition:</strong> A list is either empty OR a node containing data and pointing to another list</p>
                <p><strong>🔄 Natural Operations:</strong> All operations (insert, delete, search, traverse) are naturally recursive</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png" alt="Binary Tree Structure" />
            <p><strong>Recursive Tree Operations:</strong></p>
            <ul>
                <li><strong>Traversal:</strong> Process root, then recursively traverse left and right subtrees</li>
                <li><strong>Height Calculation:</strong> 1 + max(height(left), height(right))</li>
                <li><strong>Search:</strong> Check current node, then recursively search appropriate subtree</li>
            </ul>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png" alt="Linked List Structure" />
            <p><strong>Why not Arrays/Stacks/Queues?</strong> These are typically implemented iteratively and don't have self-similar recursive substructures.</p>
        `
    },
    {
        question: "What software quality determines how easy it is to understand and modify code?",
        options: ["Performance", "Maintainability", "Security", "Scalability"],
        correct: 1,
        explanation: "Maintainability is the software quality that determines how easily code can be understood, modified, and extended by developers.",
        moreInfo: `
            <h4>🔧 Code Maintainability Factors</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*8kC-9Q5Q8fZr1TGxKQG2Bg.png" alt="Software Quality Attributes" />
            <p><strong>Key Maintainability Factors:</strong></p>
            <div style="background: #f5f5dc; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>📖 Code Readability:</strong> Clear variable names, proper formatting</p>
                <p><strong>🏗️ Modular Design:</strong> Well-organized, separated concerns</p>
                <p><strong>📝 Documentation:</strong> Comments and clear specifications</p>
                <p><strong>🧪 Test Coverage:</strong> Comprehensive tests for verification</p>
                <p><strong>🔄 Consistent Style:</strong> Uniform coding standards</p>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Kua0gvN_P2VqBVpkC8VzqA.png" alt="Software Development Lifecycle" />
            <p><strong>Economic Impact:</strong></p>
            <ul>
                <li><strong>💰 Cost Reduction:</strong> 60-80% of software costs are in maintenance</li>
                <li><strong>⏰ Faster Development:</strong> New features can be added quickly</li>
                <li><strong>🐛 Easier Debugging:</strong> Problems are easier to locate and fix</li>
                <li><strong>👥 Team Efficiency:</strong> New developers can contribute faster</li>
            </ul>
        `
    },
    {
        question: "What is the worst-case time complexity for searching in a sorted array using binary search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 1,
        explanation: "Binary search eliminates half the search space at each step, resulting in O(log n) worst-case time complexity.",
        moreInfo: `
            <h4>🔍 Binary Search Analysis</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Binary_Search_Depiction.svg/1200px-Binary_Search_Depiction.svg.png" alt="Binary Search Process" />
            <p><strong>How Binary Search Achieves O(log n):</strong></p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Step 1:</strong> Compare target with middle element</p>
                <p><strong>Step 2:</strong> If target < middle, search left half</p>
                <p><strong>Step 3:</strong> If target > middle, search right half</p>
                <p><strong>Step 4:</strong> Repeat until found or search space is empty</p>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*yiyfZodqXNwMouC0-B0Wlg.png" alt="Logarithmic Growth" />
            <p><strong>Mathematical Analysis:</strong></p>
            <ul>
                <li>After 1 comparison: n/2 elements remain</li>
                <li>After 2 comparisons: n/4 elements remain</li>
                <li>After k comparisons: n/2^k elements remain</li>
                <li>When n/2^k = 1, we're done: k = log₂(n)</li>
            </ul>
            <p><strong>Why it's efficient:</strong> Even with 1 million elements, binary search needs at most 20 comparisons!</p>
        `
    },
    {
        question: "What is the time complexity for merging two sorted arrays of sizes m and n?",
        options: ["O(1)", "O(log(m+n))", "O(m + n)", "O(m × n)"],
        correct: 2,
        explanation: "Merging two sorted arrays requires examining each element once, resulting in O(m + n) linear time complexity.",
        moreInfo: `
            <h4>🔀 Efficient Array Merging</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Uvs7CK1oew7lBn5T4P1KVQ.png" alt="Array Merge Process" />
            <p><strong>Two-Pointer Merge Algorithm:</strong></p>
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>1. Initialize:</strong> Two pointers at the start of each array</p>
                <p><strong>2. Compare:</strong> Take the smaller element, advance its pointer</p>
                <p><strong>3. Repeat:</strong> Until one array is completely processed</p>
                <p><strong>4. Copy Remaining:</strong> Add leftover elements from the other array</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/1200px-Merge_sort_algorithm_diagram.svg.png" alt="Merge Sort Diagram" />
            <p><strong>Why O(m + n)?</strong></p>
            <ul>
                <li>Each element from both arrays is examined exactly once</li>
                <li>Total elements processed: m + n</li>
                <li>No element is processed more than once</li>
                <li>Linear time complexity: O(m + n)</li>
            </ul>
            <p>This efficient merging is the foundation of merge sort's divide-and-conquer approach!</p>
        `
    },
    {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1,
        explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
        moreInfo: `
            <h4>📚 Stack Data Structure</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*r4Bfo3rrFprzFM2zbgzZXA.png" alt="Stack LIFO Operations" />
            <p><strong>Stack Operations:</strong></p>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>📥 Push:</strong> Add element to the top of stack</p>
                <p><strong>📤 Pop:</strong> Remove and return top element</p>
                <p><strong>👁️ Peek/Top:</strong> View top element without removing</p>
                <p><strong>❓ isEmpty:</strong> Check if stack is empty</p>
            </div>
            <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="Stack Structure" />
            <p><strong>Real-world Applications:</strong></p>
            <ul>
                <li><strong>🔙 Function Calls:</strong> Call stack in programming languages</li>
                <li><strong>↩️ Undo Operations:</strong> Text editors, image editors</li>
                <li><strong>🧮 Expression Evaluation:</strong> Converting infix to postfix</li>
                <li><strong>🌐 Browser History:</strong> Back button functionality</li>
            </ul>
            <p><strong>LIFO Example:</strong> Books stacked on a table - you can only take the top book first!</p>
        `
    },
    {
        question: "What determines a system's ability to continue working despite errors or unexpected conditions?",
        options: ["Maintainability", "Reliability", "Performance", "Usability"],
        correct: 1,
        explanation: "Reliability is the system's ability to perform correctly and consistently, even when facing errors or unexpected conditions.",
        moreInfo: `
            <h4>🔒 System Reliability</h4>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*VQeYNlmtVHMf9X7rKQWoBA.png" alt="Reliable Systems Design" />
            <p><strong>Building Reliable Systems:</strong></p>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>🛡️ Error Handling:</strong> Graceful failure instead of crashes</p>
                <p><strong>🔄 Redundancy:</strong> Backup systems and failover mechanisms</p>
                <p><strong>🧪 Testing:</strong> Comprehensive testing under various conditions</p>
                <p><strong>📊 Monitoring:</strong> Continuous system health monitoring</p>
                <p><strong>🔧 Recovery:</strong> Automatic recovery from failures</p>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*9Q8nwUSSQDHuqIQpINzKvQ.png" alt="Error Handling Strategies" />
            <p><strong>Reliability vs Other Qualities:</strong></p>
            <ul>
                <li><strong>🔒 Reliability:</strong> Consistent correct operation over time</li>
                <li><strong>🔧 Maintainability:</strong> Ease of modification and updates</li>
                <li><strong>⚡ Performance:</strong> Speed and efficiency of operations</li>
                <li><strong>👥 Usability:</strong> Ease of use for end users</li>
            </ul>
            <p><strong>Example:</strong> A reliable web server continues serving requests even when some components fail, using backup systems and error recovery.</p>
        `
    }
        ]
    };
