document.addEventListener('DOMContentLoaded', function () {
    const clientLink = document.getElementById('client-link');
    const lawyerLink = document.getElementById('lawyer-link');
    const signupForm = document.getElementById('signup-form');

    // Toggle active state between links
    clientLink.addEventListener('click', function (e) {
        e.preventDefault();
        clientLink.classList.add('active');
        lawyerLink.classList.remove('active');
        window.location.href = 'signup-client.html';
    });

    lawyerLink.addEventListener('click', function (e) {
        e.preventDefault();
        lawyerLink.classList.add('active');
        clientLink.classList.remove('active');
        window.location.href = 'signup-lawyer.html';
    });


        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', async function(event) {
                event.preventDefault();
                
                const formId = form.id;
                let url = '';
                let body = {};
                
                if (formId === 'signup-client-form' || formId === 'signup-lawyer-form') {
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    const confirmPassword = document.getElementById('confirm-password').value;
                    
                    body = {
                        email: email,
                        password: password,
                        confirm_password: confirmPassword,
                    };
                    
                    if (formId === 'signup-client-form') {
                        url = 'https://legalease-api.onrender.com/user/signup';
                    } else if (formId === 'signup-lawyer-form') {
                        url = 'https://legalease-api.onrender.com/lawyer/signup';
                    }
                } else if (formId === 'signin-client-form' || formId === 'signin-lawyer-form') {
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    
                    body = {
                        email: email,
                        password: password,
                    };
                    
                    if (formId === 'signin-client-form') {
                        url = 'https://legalease-api.onrender.com/user/login';
                    } else if (formId === 'signin-lawyer-form') {
                        url = 'https://legalease-api.onrender.com/lawyer/login';
                    }
                }
                
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                        alert(formId.includes('signup') ? 'User registered successfully!' : 'Login successful!');
                        if (formId.includes('signup')) {
                            window.location.href = 'signin-client.html'; 
                          } else {
                            window.location.href = 'landingPage.html'; 
                          }
                    } else {
                        const error = await response.json();
                        alert('Error: ' + error.message);
                    }
                } catch (error) {
                    alert('Error: ' + error.message);
                }
            });
        });
    });
    