// make a simple storage then iterate

function sunsetViews(buildings, direction) {
  // Write your code here.
  let length = buildings.length
    let result = []
    if (direction === "EAST") {
        let currentmax = 0
        for (let i = length-1; i >= 0; i--)
            {
                if (buildings[i] > currentmax)
                {
                console.log(i)
                result.unshift(i)
                currentmax = buildings[i]
                }
            }
        }
        if (direction === "WEST") {
            let currentmax = 0
            for (let i = 0; i < length; i++)
                {
                    if (buildings[i] > currentmax)
                    {
                    console.log(i)
                    result.push(i)
                    currentmax = buildings[i]
                    }
                }

         }

    return result;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
