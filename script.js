/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    let newGrid = [];
    for(let i = 0; i < grid.length; i++) {
        let splt = grid[i].split('');
        let s = splt.sort();
        newGrid.push(s)
    }
    
    for(let i = 0; i < newGrid[0].length; i ++) {
        let col = []
        for(let j = 0; j < newGrid.length; j++) {
            col.push(newGrid[j][i]);
        }
        let ss = col.join('').trim();
        let scol = col.sort().join('').trim();

        if(scol !== ss) {
            console.log("NO")
            return "NO";            
        }
    }
    return "YES";
}
