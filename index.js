//  378 from start
// question 1 palindrome Number
// an integer is a palindrome when it reads the same foeward and backward
//  input : x = 121 ===> output true
//  input : x=10 ===> output : false

// const ispalindrome = function (x) {
//   return x <= 0 ? false : x === +x.toString().split("").reverse().join("");
// };
// console.log(ispalindrome(010));

// topmate platform accha hai  elivate onine prenets

// question 2

// const fib = (n) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
// //   console.log(arr);
// // console.log(arr[n])
// return arr[n]
// };
// fib(5);

// question 3 valid arguments

// an arguments is a word or phase formed by rearranging the letters of a different word or phase using all the original letters excatly once

// input (s='anagram'),(t='nagaram') => output :true
// input (s = 'rat'), (t='car'); ==> output false
// 1 approach
// const isAnagram = (s, t) => {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };

// gpt aproach
// const isAnagram = (s, t) => {
//   // Sort both arrays and join them as strings
//   return s.sort().join('') === t.sort().join('');
// };

// console.log(isAnagram([1, 2, 3, 4], [4, 3, 2, 1])); // true
// console.log(isAnagram([1, 2, 3, 4], [5, 6, 7, 8])); // false
// end gpt

// 2 approach
// const isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     let obj1 = {};
//     let obj2 = {};
//     for (let i = 0; i < s.length; i++) {
//       obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//       obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//     }
//     for (const key in obj1) {
//       if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
//   };
//   console.log(isAnagram("anagram", "nagaram"));

// rat / tar

// {
//     r: 1,
//     a: 1,
//     t:1
// }

// {
//     t: 1,
//     a: 1,
//     r:1
// }

//   question no 4
// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
// const twoSum1 = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // logic
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6
// console.log(twoSum1([2, 7, 11, 15], 26));

// Using JS Objects

// const twoSum = function (nums, target) {
//   var obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     var n = nums[i];

//     if (obj[target - n] >= 0) {
//       return [obj[target - n], i];
//     } else {
//       obj[n] = i;
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }

// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

// Brute Force Solution
// function maxProfit1(prices) {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];

//       if (currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }

//   return globalProfit;
// }
// console.log(maxProfit1([7, 1, 5, 3, 6, 4]));

// Greedy Algorithm
// const maxProfit = function (prices) {
//   let minStockPurchasePrice = prices[0] || 0;
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minStockPurchasePrice) {
//       minStockPurchasePrice = prices[i];
//     }

//     profit = Math.max(profit, prices[i] - minStockPurchasePrice);
//   }

//   return profit;
// };
// console.log(maxProfit([7, 6, 4, 3, 1]));

// [7, 1, 5, 3, 6, 4]
// min = 7 => 1

// chatgpt importan questions 10
//  with one week Practice
// 1. Reverse a String
// Problem: Write a function to reverse a string.

// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("hello")); // "olleh"

// Explanation: The split method turns the string into an array of characters, reverse reverses the array, and join turns it back into a string.

// Explanation: The split method turns the string into an array of characters, reverse reverses the array, and join turns it back into a string.

// 2. Check if a Number is Prime
// Problem: Write a function to check if a number is prime.

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };
// console.log(isPrime(7)); // true

// Explanation: A prime number has no divisors other than 1 and itself. We check up to the square root of num for efficiency.

// 3. Find the Factorial of a Number
// Problem: Write a function to calculate the factorial of a number.
// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// console.log(factorial(5)); // 120

// Explanation: This uses recursion, where the function calls itself with n-1 until n reaches 1.

// 4. Find the Maximum Element in an Array
// Problem: Write a function to find the maximum value in an array.
// const findMax = (arr) => Math.max(...arr);
// console.log(findMax([3, 5, 7, 2, 8])); // 8
// Explanation: The Math.max function, combined with the spread operator (...), extracts all elements of arr and finds the maximum.

// 5. Check if a String is a Palindrome
// Problem: Write a function to check if a string is a palindrome.

// const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("racecar")); // true

// Explanation: We reverse the string and compare it with the original to check if it’s the same.

// 6. Fibonacci Sequence
// Problem: Generate the nth Fibonacci number.
// const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
// console.log(fibonacci(5)); // 610

// Explanation: This recursive function calculates the Fibonacci sequence by summing the previous two terms until n reaches 1 or 0.

// 7. Remove Duplicates from an Array
// Problem: Write a function to remove duplicates from an array.

// const removeDuplicates = (arr) => [...new Set(arr)];
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Explanation: Using Set automatically removes duplicates, and we convert it back to an array with ....

// 8. Sum of Array Elements
// Problem: Write a function to sum all elements in an array.
// const sumArray = (arr) => arr.reduce((acc, val) => acc + val, 0);
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Explanation: The reduce method iterates through arr, adding each element to acc to find the total sum.

// 8 karna hain

// 9. Find the Second Largest Element in an Array
// Problem: Write a function to find the second largest element in an array.

// const secondLargest = (arr) => {
//   let first = -Infinity,
//     second = -Infinity;
//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }
//   return second;
// };

// console.log(secondLargest([3, 5, 7, 2, 8])); // 7
// Explanation: The loop updates first with the largest element and second with the second largest.

// 10. Merge Two Sorted Arrays
// Problem: Write a function to merge two sorted arrays into a single sorted array.

const mergeSortedArrays = (arr1, arr2) => {
  let i = 0,
    j = 0,
    result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
// Explanation: Using two pointers, this function compares elements in each array and merges them in sorted order.

// DSA MASTER WITH CHATGPT 5th November 2024
// Week 1: Fundamentals & Core Data Structures
// Topics: Arrays, Strings, Linked Lists.
// Goal: Build a strong foundation by understanding how data is stored, accessed, and manipulated.
// Tips:
// Practice Basics First: Start with simple operations like reversing an array or checking if a string is a palindrome.
// Implement from Scratch: Implement a linked list from scratch to understand pointers and memory usage.

// Week 2: Stacks & Queues
// Topics: Stacks (LIFO), Queues (FIFO).
// Goal: Grasp how these structures work, their real-life applications, and when to use each.
// Tips:
// Solve Classic Problems: Start with problems like "Valid Parentheses" or "Implement a Queue using Stacks."
// Use JavaScript’s push, pop, shift, unshift: Understand how JavaScript’s native methods help you create these structures.

// Week 3: Recursion & Hashing
// Topics: Recursive functions, Hash Tables.
// Goal: Recursion is key for DSA, and hashing allows for efficient data retrieval.
// Tips:
// Master Recursive Thinking: Start with basic recursive functions like factorial, Fibonacci, and power calculations.
// Explore Hash Maps: Practice using Map and Set in JavaScript for hashing and solving problems like finding duplicates or counting frequencies.

// Weeks 4-5: Trees & Binary Search Trees (BST)
// Topics: Binary Trees, Binary Search Trees, Tree Traversal (In-order, Pre-order, Post-order).
// Goal: Understand tree structures and traversal methods.
// Tips:
// Build a Tree from Scratch: This helps you understand nodes, roots, and connections.
// Practice Traversals: Write functions for each traversal method and understand their differences.
// Common Problems: Practice problems like finding the height of a tree, checking if a tree is balanced, or finding the lowest common ancestor.

// Week 6: Graphs & Graph Traversal Algorithms
// Topics: Graph basics, Depth-First Search (DFS), Breadth-First Search (BFS).
// Goal: Grasp graph structures and traversal techniques.
// Tips:
// Practice Small Graphs: Start with small, simple graphs to visualize how BFS and DFS work.
// Use Adjacency Lists: Implement graphs using adjacency lists in JavaScript for efficiency.

// Week 7: Sorting & Searching Algorithms
// Topics: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Binary Search.
// Goal: Master sorting methods and binary search for efficient searching.
// Tips:
// Implement Each Sort: Start with easy sorts like Bubble Sort, then progress to more complex ones like Merge Sort.
// Binary Search Practice: Practice binary search on both iterative and recursive approaches.

// Week 8: Dynamic Programming (DP) Basics
// Topics: Memoization, Tabulation, Basic DP problems.
// Goal: DP is essential for optimization in complex problems.
// Tips:
// Learn with Fibonacci: Start with the Fibonacci sequence to see how memoization saves time.
// Common DP Problems: Try problems like "Climbing Stairs" and "0/1 Knapsack" to apply DP concepts.
// General Tips and Tricks:
// Break Down Problems: Don’t jump straight into coding; break down each problem to understand its requirements and constraints.
// Consistent Practice: Practice regularly on platforms like LeetCode, HackerRank, or CodeSignal.
// Use Debuggers: JavaScript has a powerful debugger; use it to step through your code and understand each part’s behavior.
// Track Progress: Keep a checklist of topics and problems you’ve covered to ensure you’re making steady progress.
// Seek Explanations: If you get stuck, look for explanations and solutions online, then re-implement the solution on your own.
// With this approach, you’ll make steady progress and build strong DSA skills in JavaScript!

// week one start and practice usa election date
// Day 1: Arrays Basics
// Understand Arrays
// Definition: Arrays store elements sequentially, allowing easy access via index.
// Key Operations: Inserting, updating, deleting, and accessing elements.
// Practice Problems
// Reverse an Array: Write a function to reverse an array in place.

// 1Q
// const reverseArray = (arr) => {
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap elements
//     left++;
//     right--;
//   }
//   return arr;
// };
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// new one
// const arrrev =(arr)=>{
// return [arr.join('').split('').reverse().join('')]
// }
// console.log(arrrev([1,2,3,4,5]))

// Q2
// Find Maximum and Minimum in an Array
// const findMax = (arr) => Math.max(...arr);
// const findMin = (arr) => Math.min(...arr);
// console.log(findMax([3, 1, 6, 8, 2])); // 8
// console.log(findMin([3, 1, 6, 8, 2])); // 1

// Q3
// Check for Duplicates

// const hasDuplicates = (arr) => new Set(arr).size !== arr.length;
// console.log(hasDuplicates([1, 2, 3, 4, 4])); // true

// yaha tak practice karna hain

// Day 2
// Day 2: Arrays - Intermediate Problems
// Practice Problems
// Rotate an Array: Shift all elements to the right by k positions.

// Q1
// const rotateArray = (arr, k) => {
//   k %= arr.length;
//   return arr.slice(-k).concat(arr.slice(0, -k));
// };
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Q2
// Move Zeros to the End: Move all zeros in an array to the end, preserving order.
const moveZeros = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }
  return arr;
};
// console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// Day 3: Strings Basics
// Learn about Strings
// Strings are immutable in JavaScript, so any manipulation creates a new string.
// Practice Problems
// Reverse a String

// Q1
// Reverse a String

// const reverseStrings = (str) => str.split("").reverse().join("");
// console.log(reverseString("hello")); // "olleh"

// Q2
// Check if a String is a Palindrome

// javascript
// Copy code
// const isPalindromee = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("racecar")); // true

// Day 4: String Manipulation
// Practice Problems

// Q1
// Count Vowels in a String
// const countVowels = (str) => {
//   const vowels = new Set("aeiouAEIOU");
//   return [...str].filter((char) => vowels.has(char)).length;
// };
// console.log(countVowels("hello world")); // 3

// Q2
// Find the Longest Word in a Sentence

// const longestWord = (sentence) => {
//   const words = sentence.split(" ");
//   return words.reduce(
//     (longest, word) => (word.length > longest.length ? word : longest),
//     ""
//   );
// };
// console.log(longestWord("I love programming in JavaScript")); // "programming"

// Days 5-7: Linked Lists Basics
// Understand Linked Lists

// Linked Lists consist of nodes where each node contains data and a pointer to the next node.

// Q1
// Create a Simple Linked List

// javascript
// Copy code
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      // console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.printList(); // 1 2 3

// Q2
// Practice Problem

// Reverse a Linked List
const reverseLinkedList = (head) => {
  let prev = null,
    current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// Review and Practice
// At the end of Week 1, review all problems and try re-solving them without looking at the solutions. This repetition will reinforce your understanding.

// By the end of Week 1, you’ll have a good understanding of arrays, strings, and linked lists, which will help build a strong foundation for Week 2! Let me know if you need more detailed explanations or examples for any specific topic.

// next week is comming soon start date 15 after line delete
// next week is comming soon start date 15 after line delete
