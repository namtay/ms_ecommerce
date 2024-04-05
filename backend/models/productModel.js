const connection = require('./dbConnection');
const jwtUtils = require("./jwtUtils");

async function viewProducts() {
    try {
        return new Promise((resolve, reject) => {
   
            connection.query('SELECT * FROM  Products', (error, results) => {
              if (error) {
                reject({ success: false, message: 'Error getting products' });
              } else {
                resolve({ success: true, message:results});
              }
            }
            )     
            
          });
      
    } catch (error) {
      console.error('Error getting products:', error);
    }
  }

  // Function to add a product
async function addProduct(name, price, description) {
  try {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Products (name, price, description) VALUES (?, ?, ?)', [name, price, description], (error, results) => {
        if (error) {
          reject({ success: false, message: 'Error adding product' });
        } else {
          resolve({ success: true, message: 'Product added successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

// Function to edit a product
async function editProduct(productId, name, price, description) {
  try {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE Products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, productId], (error, results) => {
        if (error) {
          reject({ success: false, message: 'Error editing product' });
        } else {
          resolve({ success: true, message: 'Product edited successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error editing product:', error);
  }
}

// Function to delete a product
async function deleteProduct(productId) {
  try {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM Products WHERE id = ?', [productId], (error, results) => {
        if (error) {
          reject({ success: false, message: 'Error deleting product' });
        } else {
          resolve({ success: true, message: 'Product deleted successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

  module.exports ={
    viewProducts,
    addProduct,
    editProduct,
    deleteProduct

  }