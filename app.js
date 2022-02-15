
const DUMMY_DATA = [
  { id: 1, name: "alex", value: (Math.random() * 50).toFixed() },
  { id: 2, name: "bob", value: (Math.random() * 50).toFixed() },
  { id: 3, name: "carl", value: (Math.random() * 50).toFixed() },
  { id: 4, name: "dave", value: (Math.random() * 50).toFixed() },
  { id: 5, name: "ed", value: (Math.random() * 50).toFixed() },
  { id: 6, name: "fred", value: (Math.random() * 50).toFixed() },
  { id: 7, name: "george", value: (Math.random() * 50).toFixed() },
  { id: 8, name: "harry", value: (Math.random() * 50).toFixed() },
  { id: 9, name: "ian", value: (Math.random() * 50).toFixed() },
  { id: 10, name: "joe", value: (Math.random() * 50).toFixed() },
];
const cont = d3
  .select(".s")
  .selectAll("p")
  .data(DUMMY_DATA)
  .enter()
  .append("p")
  .classed("bar", true)
  .text((data) => data.name)
  .style("width", value => `${value.value * 10}px`);

cont.selectAll(".bar").data();
