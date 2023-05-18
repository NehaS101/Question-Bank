Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
var letterCombinations = function(digits) {
   
    const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
     let len = digits.length, ans = []
    if (!len) return []
    const bfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = L[digits[pos]]
            for (let i = 0; i < letters.length; i++)
                bfs(pos+1,str+letters[i])
        }
    }
    bfs(0,"")
    return ans
};