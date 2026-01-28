/**
 * Academic Personal Website JavaScript
 * Author: Hyunwook (Dennis) Lee
 * Website: hyunwooklee.org
 */

document.addEventListener('DOMContentLoaded', function() {
    // ==========================================================================
    // Mobile Navigation Toggle
    // ==========================================================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ==========================================================================
    // Active Navigation Link Highlighting
    // ==========================================================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navMenuLinks = document.querySelectorAll('.nav-menu a');

    navMenuLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ==========================================================================
    // Smooth Scroll for Anchor Links (if any on the page)
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================================================
    // Update Footer Year Automatically
    // ==========================================================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
