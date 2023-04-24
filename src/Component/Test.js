const bcrypt = require("bcryptjs");
const resetpass = async (e) => {
  const salt = await bcrypt.genSalt(10);
  const SecurePassword = await bcrypt.hash("Alka@9044", salt);
  //   const Ref = doc(db, "login", resetmail);
  //   await updateDoc(Ref, {
  //     password: SecurePassword,
  //   });
};
resetpass();
$2a$10$3X2J7cPQpxjq4kRjUP6WFetfTxvEgmEDcl3dPKXjPh3Wk2aiHf8hS;
