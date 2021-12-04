const ForEach = ({ filter = () => true, items, render }) => items.filter(filter).map(render);
export default ForEach;
