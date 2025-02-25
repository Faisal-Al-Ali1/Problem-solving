# 🚀 Data Structures & Algorithms - Task Solutions

## 📌 Overview
This repository contains solutions for various **data structure problems** implemented in **JavaScript**. The tasks include **stacks, queues, recursion, and linked lists**.

## 📂 Tasks Breakdown
Below is a list of the tasks completed in this project:

### **Q1: Reverse an Array Using Stack 🌀**
> **Problem Statement:**  
> Given an array `arr[]` of size `N`, reverse it using a **Stack**.

✅ **Implemented Solution:**  
- **Push all elements** onto a stack.
- **Pop elements one by one** to get the reversed order.
- Uses **LIFO (Last In, First Out)** principle.

---

### **Q2: Implement a Queue Using Two Stacks 📤📥**
> **Problem Statement:**  
> Implement a **Queue** (FIFO) using **Two Stacks**.

✅ **Implemented Solution:**  
- **Two Stacks Approach**:
  1. `stack1` → Used for **enqueue** operation.
  2. `stack2` → Used for **dequeue** operation.

---

### **Q3: Sum of an Array Using Recursion 🔄**
> **Problem Statement:**  
> Write a recursive function to **calculate the sum** of all elements in an array.

✅ **Implemented Solution:**  
- Base Case: If the array is empty, return `0`.
- Recursive Case: Return `arr[0] + sum(arr.slice(1))`.

---

### **Q4: Reverse a Linked List 🔄**
> **Problem Statement:**  
> Create a function that takes a **Linked List** and **reverses** it.

✅ **Implemented Solution:**  
- Used **Iterative Approach**:
  - Maintain **3 pointers**: `prev`, `current`, `next`.
  - Traverse and **reverse the pointers** step-by-step.
- **Time Complexity:** `O(n)`

---

### **Q5: Delete the Middle Node in a Linked List 🗑️**
> **Problem Statement:**  
> Write a function that **deletes the middle node** of a **Linked List** and returns it.

✅ **Implemented Solution:**  
- Used **Slow & Fast Pointer Approach**:
  - **Slow pointer** moves 1 step.
  - **Fast pointer** moves 2 steps.
  - When `fast` reaches the end, `slow` is at the **middle**.
- Modify the `prev.next` pointer to **skip the middle node**.
