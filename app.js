d3.select('.s')
  .selectAll('p')
  .data([1,2,3,4,5])
  .enter()
  .append('p')
  .text(data => data);
 
