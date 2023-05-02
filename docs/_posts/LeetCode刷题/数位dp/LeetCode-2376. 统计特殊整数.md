---
title: LeetCode 2376. 统计特殊整数
date: 2022-8-15
tags: [LeetCode, 数位dp, 算法]
---
## 数位DP | 暴力 | 模板
### [原题连接](https://leetcode.cn/problems/count-special-integers/)
### 题目:
   **如果一个正整数每一个数位都是互不相同的,我们称它是特殊整数,给你一个正整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。** 
#### 示例 1:
```
输入：n = 20
输出：19
解释：1 到 20 之间所有整数除了 11 以外都是特殊整数。所以总共有 19 个特殊整数。
```
#### 示例 2：
```
输入：n = 5
输出：5
解释：1 到 5 所有整数都是特殊整数。
```
#### 示例 3：
```
输入：n = 135
输出：110
解释：从 1 到 135 总共有 110 个整数是特殊整数。
不特殊的部分数字为：22 ，114 和 131 。
```
#### 数据范围：

+ $1$ <= $n$ <= $2$ $*$ $10^{9}$

### 方法一：
#### [思路讲解](https://www.bilibili.com/video/BV1wv4y1c71n?spm_id_from=333.999.0.0&vd_source=bed1b37cf07540813685e4deaa965427)
```cpp
class Solution {
public:
    int countSpecialNumbers(int n) {
        vector<int> nums;
        while (n) nums.push_back(n % 10), n /= 10;
        int res = 0;
        for (int i = 1; i < nums.size() ; i ++ ) { // 长度比 n 小的
            int t = 9;
            for (int j = 0, u = 9; j < i - 1 ; j ++ , u -- )
                t *= u;
            res += t;
        }
        // cout << res << endl;
        reverse(nums.begin(), nums.end());
        bool st[10] = {0};
        for (int i = 0; i < nums.size() ; i ++ ) {
            for (int j = !i; j < nums[i] ; j ++ ) {
                if (st[j]) continue;
                int t = 1;
                for (int k = 0, u = 9 - i; k < nums.size() - i - 1 ; k ++ , u -- )
                // 剩下k位，和u个数字可以填
                    t *= u;
                res += t;
            }

            if (st[nums[i]]) break; // 和前面数字重复，那就没有这个分支了，退出
            st[nums[i]] = true;
        }
        set<int> hash(nums.begin(), nums.end()); // 枚举最后一条链
        if (hash.size() == nums.size()) res ++ ;

        return res;
    }
};
```
### 方法二：
暴力枚举：
暴力也可以过，但不太好！$1804ms$
复杂度： **$O((log_{10}n)!)$**
共有 **$O(log_{10}n)$** 个数位，故需要 **$O((log_{10}n)!)$** 的时间枚举。
```cpp
class Solution {
public:
    typedef long long LL;
    int ans = 0;
    LL m;
    int vis[14] = {0};
    void dfs(LL v) {
        if (v > m) return;
        ans ++ ;
        // cout << v << " ";
        for (int i = 0; i < 10 ; i ++ ) {
            if (vis[i]) continue;
            vis[i] = 1;
            dfs(v * 10 + i);
            vis[i] = 0;
        }
    }
    int countSpecialNumbers(int n) {
        m = n;
        for (int i = 1; i < 10 ; i ++ ) {
            vis[i] = 1;
            dfs(i);
            vis[i] = 0;
        }
        return ans;
    }
};
```