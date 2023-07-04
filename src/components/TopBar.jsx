import React, { useState } from 'react';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // Autres actions à effectuer lors de la fermeture du TopBar
  };

  return (
    <div className={`TopBar ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <>
          <p>LA LIVRAISON EST GRATUITE POUR TOUTE COMMANDE DE PLUS DE 100$.</p>
          <span className="crois" onClick={handleClose}>X</span>
        </>
      )}
    </div>
  );
};

export default TopBar;


// const TopBar = () => {
//   return (
//     <div className="TopBar">
//       <p>LA LIVRAISON EST GRATUITE POUR TOUTE COMMANDE DE PLUS DE 100$.</p>
//       <span className="crois">X</span>
//     </div>
//   );
// };

// export default TopBar;
