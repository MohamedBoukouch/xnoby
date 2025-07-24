(function(){
    const usernameForm = document.getElementById('usernameForm');
    const usernameInput = document.getElementById('usernameInput');
    const loadingDiv = document.getElementById('loading');
    const loadingText = document.getElementById('loadingText');
    const packagesDiv = document.getElementById('packages');
    const packageList = document.getElementById('packageList');
    const verificationModal = document.getElementById('verificationModal');
  
    const RobloxPackages = [
      { price: "$0.00", amount: "1,000", id: 1 },
      { price: "$1.00", amount: "5,000", id: 2 },
      { price: "$3.00", amount: "10,000", id: 3 },
      { price: "$5.00", amount: "25,000", id: 4 }
    ];
  
    let currentUsername = '';
  
    usernameForm.addEventListener('submit', function(e){
      e.preventDefault();
      currentUsername = usernameInput.value.trim();
      if(!currentUsername) return;
  
      usernameForm.style.display = 'none';
      loadingText.textContent = `Loading packages for ${currentUsername}...`;
      loadingDiv.style.display = 'block';
  
      setTimeout(() => {
        loadingDiv.style.display = 'none';
        showPackages();
      }, 2000);
    });
  
    function showPackages() {
      packagesDiv.style.display = 'block';
      packageList.innerHTML = '';
      RobloxPackages.forEach(pkg => {
        const pkgDiv = document.createElement('div');
        pkgDiv.className = 'package';
  
        pkgDiv.innerHTML = `
          <div class="package-left">
            <img src="./images/money_icon.png" alt="Money Icon" />
            <div>
              <p class="price">${pkg.price}</p>
              <p class="label">Roblox Amount</p>
            </div>
          </div>
          <div class="package-right">
            <p class="amount">${pkg.amount}</p>
            <button class="select-btn" data-id="${pkg.id}">Select</button>
          </div>
        `;
        packageList.appendChild(pkgDiv);
      });
  
      packageList.querySelectorAll('.select-btn').forEach(button => {
        button.addEventListener('click', () => {
          openCpaLocker();
        });
      });
    }
  
    function openCpaLocker() {
      packagesDiv.style.display = 'none';
      // Show dark overlay backdrop
      verificationModal.style.display = 'flex';
  
      // Open the CPA locker using the function _iE() provided by the script
      if (typeof _iE === 'function') {
        _iE();
      } else {
        console.warn('CPA Locker function _iE() not available yet.');
      }
    }
  
  })();
  