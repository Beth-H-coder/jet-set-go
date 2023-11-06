export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items to your list! 🏖️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `Everything is packed and ready to go! ✈️`
          : `🧳 You have ${numItems} items on your list - you have already packed
          ${numPacked} of them, which is ${percentage}% of all items!`}
      </em>
    </footer>
  );
}
