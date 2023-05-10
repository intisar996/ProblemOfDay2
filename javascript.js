function Cal(x1, y1, x2, y2) {
    let slope =( (y1 - y2) / (x1 - x2));
    let  length = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
    let y = {y1:y1,y2:y2};
    return {slop :slope , length:length,y};

  }
  
  let S1 = Cal(-10, 20, -10, -18); 
  let S2 = Cal(-10, 20, 0, 3); 
  let S3 = Cal(0,3,8,17); 
  let S4 = Cal(8, 17, 10, -16); 
  let S5 = Cal(16, -16, -10, -18);
  
  console.log(S1);
  console.log(S2);
  console.log(S3);
  console.log(S4);
  console.log(S5);

  
  let MaxY = Math.max(S1.y.y1,S1.y.y2,S2.y.y1,S2.y.y2,S3.y.y1,S3.y.y2,S4.y.y1,S4.y.y2,S5.y.y1,S5.y.y2);
  let MinY = Math.min(S1.y.y1,S1.y.y2,S2.y.y1,S2.y.y2,S3.y.y1,S3.y.y2,S4.y.y1,S4.y.y2,S5.y.y1,S5.y.y2);
  
  console.log("Y MAX:" + MaxY);
  console.log("Y MIN:" + MinY);
