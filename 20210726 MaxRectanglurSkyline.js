function largestRectangleUnderSkyline(buildings) {
  // Write your code here.
        if (buildings.length === 0) {return 0}
      
    let maxHeightAmongAllBuildings = Math.max(...buildings)
      console.log(maxHeightAmongAllBuildings)
      let buildingCount = buildings.length
      let maxArea = -Infinity
      
      for (i = 1; i <= maxHeightAmongAllBuildings; i++) {
          let buildingheightoveri = []
          for (j = 0; j < buildingCount; j++) {
              if (buildings[j] >= i) {buildingheightoveri.push(i)} else {buildingheightoveri.push(0)}
          }
          console.log(buildingheightoveri)
          
          let area = 0
          for (k = 0; k < buildingCount; k++) {
              if (buildingheightoveri[k] !== 0) {area += buildingheightoveri[k]; if (area > maxArea) {maxArea = area}}
              else {area = 0}
          }
      }
      
      console.log(maxArea)
      return(maxArea)
}

// Do not edit the line below.
exports.largestRectangleUnderSkyline = largestRectangleUnderSkyline;
