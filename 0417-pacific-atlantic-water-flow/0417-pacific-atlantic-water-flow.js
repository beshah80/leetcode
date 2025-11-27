/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    
    const pacific = Array.from({length: m}, () => Array(n).fill(false));
    const atlantic = Array.from({length: m}, () => Array(n).fill(false));
    
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const dfs = (i,j, visited) => {
        visited[i][j] = true;
        for (const [dx,dy] of dirs) {
            const ni = i + dx;
            const nj = j + dy;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n &&
                !visited[ni][nj] &&
                heights[ni][nj] >= heights[i][j]) {
                dfs(ni, nj, visited);
            }
        }
    }
    
    // Start DFS from Pacific edges
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
        dfs(i, n-1, atlantic);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific);
        dfs(m-1, j, atlantic);
    }
    
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i,j]);
            }
        }
    }
    
    return result;
};
