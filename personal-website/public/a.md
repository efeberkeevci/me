# 1233. Remove Sub-Folders from the Filesystem
### Medium

Given a list of folders, remove all sub-folders in those folders and return in any order the folders after removing.

If a folder[i] is located within another folder[j], it is called a sub-folder of it.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, /leetcode and /leetcode/problems are valid paths while an empty string and / are not.

 
    Example 1:

    Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
    Output: ["/a","/c/d","/c/f"]
    Explanation: Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

    Example 2:

    Input: folder = ["/a","/a/b/c","/a/b/d"]
    Output: ["/a"]
    Explanation: Folders "/a/b/c" and "/a/b/d/" will be removed because they are subfolders of "/a".

    Example 3:

    Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
    Output: ["/a/b/c","/a/b/ca","/a/b/d"]

## Approach:
1. Create a trie from the given paths
2. Starting from the root 
    1. if the current directory is end of a path, then push this directory name to a string vector and return
    2. if not, recurse on each branch, collect their results, concat current directory name to each string
    3. Return the the vector of strings

```cpp
class TrieNode{
public:
    string dirname = "";
    map<string, TrieNode* > sub;
    bool end_of_path = false;
    
    static void insert(TrieNode * root, string path){
        TrieNode * cur = root;
        int pos = 1;
        int end;
        while(pos < path.length()){
            end = path.find("/", pos);
            string cur_dirname = path.substr(pos,end-pos);
            
            if(cur_dirname == "")
                break;
            if(cur->sub.find(cur_dirname) != cur->sub.end())
                cur = cur->sub[cur_dirname];
            else{
                TrieNode * new_node = new TrieNode();
                new_node->dirname = cur_dirname;
                
                cur->sub.insert({cur_dirname, new_node});
                cur = new_node;
            }
            pos = end+1;
            
        }
        cur->end_of_path = true;
        return;
    }
    
    static vector<string> get_filesystem(TrieNode * root){
        vector<string> v;
        if(root->end_of_path == true){
            v.push_back(root->dirname);
            return v;
        }else{
            map<string, TrieNode* >::iterator it;
            for(it = root->sub.begin(); it != root->sub.end(); it++){
                vector<string> res = get_filesystem(it->second);
                v.insert(v.end(), res.begin(), res.end());
            }
            
            for(int i = 0; i<v.size(); i++){
                v[i] = root->dirname + "/" + v[i];
            }
        }
        return v;
    }
    
    
};

class Trie{
public:
    TrieNode * root;
};

class Solution {
public:
    vector<string> removeSubfolders(vector<string>& folder) {
        Trie * mytrie = new Trie();
        mytrie->root = new TrieNode();
        for(int i = 0; i<folder.size(); i++){
            TrieNode::insert(mytrie->root, folder[i]);
        }
        return TrieNode::get_filesystem(mytrie->root);  
    }
};

```