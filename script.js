function findTwin() {
  const address = document.getElementById("address").value;

  const result = {
    similarity: 90,
    match: {
      address: "0x7f6e...303c1",
      badges: 5,
      tx: 120,
      days: 40,
      streak: 10,
      app: "Uniswap"
    }
  };

  document.getElementById("out").textContent =
    JSON.stringify(result, null, 2);
}
