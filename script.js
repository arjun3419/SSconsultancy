// Job data
const JOBS = [
    {
        id: 1,
        title: 'Telecalling Executive',
        type: 'Full Time',
        salary: 13000,
        description: 'Make outbound calls to potential customers to promote products and services. Work from the comfort of your home with flexible hours.',
        requirements: [
            'Excellent communication skills',
            'Fluency in English and local languages',
            'Basic computer knowledge',
            'Quiet work environment'
        ],
        company: 'Flipkart'
    },
    {
        id: 2,
        title: 'Data Entry Operator',
        type: 'Part Time',
        salary: 6000,
        description: 'Update and maintain databases, enter customer information, process orders, and manage digital documents.',
        requirements: [
            'Fast typing speed (minimum 40 WPM)',
            'Attention to detail',
            'Basic computer skills',
            'Knowledge of MS Excel'
        ],
        company: 'Amazon'
    },
    {
        id: 3,
        title: 'Customer Support Representative',
        type: 'Full Time',
        salary: 13000,
        description: 'Handle customer inquiries via phone, email, and chat. Provide product information and resolve customer issues.',
        requirements: [
            'Strong communication skills',
            'Problem-solving abilities',
            'Patient and empathetic attitude',
            'Basic technical knowledge'
        ],
        company: 'Mahindra'
    },
    {
        id: 4,
        title: 'Freelance Content Writer',
        type: 'Part Time',
        salary: 6000,
        description: 'Create engaging content for blogs, websites, and social media platforms. Work on your own schedule.',
        requirements: [
            'Excellent writing skills',
            'Creativity and research abilities',
            'Knowledge of SEO principles',
            'Ability to meet deadlines'
        ],
        company: 'ITC'
    },
    {
        id: 5,
        title: 'Online Tutor',
        type: 'Part Time',
        salary: 6000,
        description: 'Teach students online in your area of expertise. Set your own hours and connect with students from around the country.',
        requirements: [
            'Strong knowledge in specific subject areas',
            'Good teaching and communication skills',
            'Patience and understanding',
            'Reliable internet connection'
        ],
        company: 'Isuzu'
    },
    {
        id: 6,
        title: 'Digital Marketing Assistant',
        type: 'Full Time',
        salary: 13000,
        description: 'Assist in implementing marketing campaigns, managing social media accounts, and analyzing marketing data.',
        requirements: [
            'Knowledge of digital marketing concepts',
            'Experience with social media platforms',
            'Basic analytical skills',
            'Creative mindset'
        ],
        company: 'Flipkart'
    }
];

// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const jobGrid = document.getElementById('jobGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const applicationForm = document.getElementById('applicationForm');
const paymentSection = document.getElementById('paymentSection');
const successMessage = document.getElementById('successMessage');
const jobInterestSelect = document.getElementById('jobInterest');
const copyUpiBtn = document.getElementById('copyUpi');
const confirmPaymentBtn = document.getElementById('confirmPayment');
const backToFormBtn = document.getElementById('backToForm');
const currentYearSpan = document.getElementById('currentYear');

// Initialize the website
function init() {
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Populate job listings
    displayJobs('all');
    
    // Populate job interest select
    populateJobSelect();
    
    // Add event listeners
    setupEventListeners();
}

// Display jobs based on filter
function displayJobs(filter) {
    const filteredJobs = filter === 'all' 
        ? JOBS 
        : JOBS.filter(job => job.type === filter);
    
    jobGrid.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <span class="job-type ${job.type === 'Full Time' ? 'full-time' : 'part-time'}">
                ${job.type}
            </span>
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="salary">₹${job.salary.toLocaleString()} per month</div>
            <p class="description">${job.description}</p>
            <div class="requirements">
                <h4>Requirements:</h4>
                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            <a href="#apply" class="btn btn-primary">Apply Now</a>
        </div>
    `).join('');
}

// Populate job interest select
function populateJobSelect() {
    jobInterestSelect.innerHTML = `
        <option value="">Select a position</option>
        ${JOBS.map(job => `
            <option value="${job.title}">
                ${job.title} (${job.type} - ₹${job.salary}/month)
            </option>
        `).join('')}
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    menuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
    });
    
    // Job filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayJobs(btn.dataset.filter);
        });
    });
    
    // Form submission
    applicationForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        applicationForm.classList.add('hidden');
        paymentSection.classList.remove('hidden');
    });
    
    // Copy UPI ID
    copyUpiBtn?.addEventListener('click', () => {
        const upiId = document.getElementById('upiId').textContent;
        navigator.clipboard.writeText(upiId);
        
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.textContent = 'UPI ID copied!';
        setTimeout(() => {
            copyMessage.textContent = '';
        }, 2000);
    });
    
    // Confirm payment
    confirmPaymentBtn?.addEventListener('click', () => {
        paymentSection.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
            applicationForm.classList.remove('hidden');
            applicationForm.reset();
        }, 3000);
    });
    
    // Back to form
    backToFormBtn?.addEventListener('click', () => {
        paymentSection.classList.add('hidden');
        applicationForm.classList.remove('hidden');
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navMenu?.classList.remove('active');
            }
        });
    });
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init);