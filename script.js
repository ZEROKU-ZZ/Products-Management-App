let products = JSON.parse(localStorage.getItem('products')) || [];
    let editIndex = null;

    
    function saveToLocalStorage() {
      localStorage.setItem('products', JSON.stringify(products));
    }
    
    function renderTable(filteredProducts = products) {
      const tbody = document.querySelector('#productTable tbody');
      tbody.innerHTML = '';
      filteredProducts.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.category}</td>
          <td>${product.id}</td>
          <td>${product.taxes}</td>
          <td>${product.ads}</td>
          <td>${product.discounts}</td>
          <td>${product.price - product.discounts}</td>
          <td>${product.total}</td>
          <td>
            <button onclick="openEditModal(${index})">Edit</button>
            <button class="delete-btn" onclick="
            deleteProduct(${index});
            showProductsNumber();
            ">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    }

    function calculateTotal(price, taxes, ads, discounts) {
      return price + taxes + ads - discounts;
    }

    document.getElementById('productForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const price = parseFloat(document.getElementById('price').value);
      const category = document.getElementById('category').value.trim();
      const id = document.getElementById('id').value.trim();
      const taxes = parseFloat(document.getElementById('taxes').value) || 0;
      const ads = parseFloat(document.getElementById('ads').value) || 0;
      const discounts = parseFloat(document.getElementById('discounts').value) || 0;
      const count = parseInt(document.getElementById('count').value) || 1;

      if (!name || !price || !category || !id || isNaN(price) || isNaN(count)) {
        alert('Please fill out all required fields with valid values.');
        return;
      }

      for (let i = 0; i < count; i++) {
        const uniqueId = count > 1 ? `${id}-${i + 1}` : id;
        const total = calculateTotal(price, taxes, ads, discounts);
        products.push({ name, price, category, id: uniqueId, taxes, ads, discounts, total });
      }

      console.log('Products created:', products);
      saveToLocalStorage();
      renderTable(); // Reload the table after adding products
      document.getElementById('productForm').reset();
      showProductsNumber();
    });

    function deleteProduct(index) {
      const password = prompt('Enter password to delete:');
      if (password === 'ZAKARIA') {
        products.splice(index, 1);
        console.log('Product deleted:', products);
        saveToLocalStorage();
        renderTable(); // Reload the table after deletion
      } else if (password === ''){
        alert('Please put the password. Operation canceled.');
      } else if (false){
        alert('Operation canceled.');
      } else {
        alert('Incorrect password. Operation canceled.');
      }
    }

    function deleteAllProducts() {
      const password = prompt('Enter password to delete all products:');
      if (password === 'ZAKARIA') {
        products = [];
        console.log('All products deleted:', products);
        saveToLocalStorage();
        renderTable(); // Reload the table after deleting all products
      } else if (password === ''){
        alert('Please put the password. Operation canceled.');
      } else {
        alert('Incorrect password. Operation canceled.');
      }
    }

    function openEditModal(index) {
      editIndex = index;
      const product = products[index];
      document.getElementById('editName').value = product.name;
      document.getElementById('editPrice').value = product.price;
      document.getElementById('editCategory').value = product.category;
      document.getElementById('editId').value = product.id;
      document.getElementById('editTaxes').value = product.taxes;
      document.getElementById('editAds').value = product.ads;
      document.getElementById('editDiscounts').value = product.discounts;

      document.getElementById('editProductForm').onsubmit = function (e) {
        e.preventDefault();
        products[editIndex].name = document.getElementById('editName').value.trim();
        products[editIndex].price = parseFloat(document.getElementById('editPrice').value);
        products[editIndex].category = document.getElementById('editCategory').value.trim();
        products[editIndex].taxes = parseFloat(document.getElementById('editTaxes').value) || 0;
        products[editIndex].ads = parseFloat(document.getElementById('editAds').value) || 0;
        products[editIndex].discounts = parseFloat(document.getElementById('editDiscounts').value) || 0;
        products[editIndex].total = calculateTotal(
          products[editIndex].price,
          products[editIndex].taxes,
          products[editIndex].ads,
          products[editIndex].discounts
        );

        console.log('Product updated:', products);
        saveToLocalStorage();
        renderTable(); // Reload the table after editing
        closeModal();
      };

      document.getElementById('modalOverlay').style.display = 'block';
      document.getElementById('editModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('modalOverlay').style.display = 'none';
      document.getElementById('editModal').style.display = 'none';
      editIndex = null;
    }

    function filterProducts() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
      );
      renderTable(filtered); // Reload the table with filtered results
    }

    function showProductsNumber() {
            // Get the element where the number of products will be displayed
            let productsnumber = document.getElementById('showProductsNumber');

            // Get the length of the products array
            let arrayLength = products.length;

            // Update the innerHTML of the element with the number of products
            productsnumber.innerHTML = ` ` + ` ` + `( ${arrayLength} )`;
        }

        // Call the function to display the number of products
    showProductsNumber();
    renderTable(); // Initial rendering of the table
    function checkAlertsAllowed() {
        try {
          // Attempt to show an alert
          alert("Testing if alerts are allowed...");
          return true; // If the alert works, return true
        } catch (e) {
          return false; // If there's an error, return false
        }
      }
  
      // Determine what to display based on the result
      window.onload = function () {
        const isAlertAllowed = checkAlertsAllowed();
  
        if (isAlertAllowed) {
          // Show the website content
          document.getElementById('content').style.display = 'block';
        } else {
          // Show the message about alerts being disabled
          document.getElementById('message').style.display = 'block';
        }
      };