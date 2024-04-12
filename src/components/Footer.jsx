export default function Footer({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Silahkan masukan list belanjanya!!</footer>
    );
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percented = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percented}%)
    </footer>
  );
}
