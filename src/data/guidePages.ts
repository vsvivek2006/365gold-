import type { PageData } from '@/components/InfoPage';

export const guidePage: PageData = {
  path: '/guide/',
  title: 'Gold365 Guide — Complete Platform Walkthrough',
  description: 'The complete Gold365 guide covering registration, login, app download, gameplay, account management, and platform navigation.',
  h1: 'The Complete Gold365 Guide',
  breadcrumb: 'Gold365 Guide',
  intro: 'This comprehensive guide covers everything you need to know about using Gold365 — from your first visit to advanced account management. Whether you are a new user or looking to deepen your understanding, this guide has you covered.',
  sections: [
    {
      heading: 'Overview of Gold365',
      content: [
        'Gold365 is an online gaming and entertainment platform accessible via web browser and mobile app. It offers a range of games and interactive experiences designed for users of all levels.',
        'This guide is structured to take you from absolute beginner to confident platform user. Each section links to more detailed resources if you want to dive deeper.',
      ],
    },
    {
      heading: 'Getting Started',
      content: [
        'Before you can use Gold365, you need to create an account. Visit the Register page, provide your details, and confirm your registration. Once your account is active, log in from any device.',
        'For a detailed walkthrough, see our Getting Started page and Registration Guide.',
      ],
    },
    {
      heading: 'Navigating the Platform',
      content: [
        'The Gold365 interface is organized into clear sections. The main dashboard displays available games and options. Navigation menus provide quick access to account settings, support, and help resources.',
        'New users should review our Website Guide for a full tour of the interface.',
      ],
    },
    {
      heading: 'Using the Mobile App',
      content: [
        'The Gold365 mobile app offers an optimized experience for Android users. Download the APK from our APK Download page and follow the installation instructions.',
        'The app syncs with your web account, so everything stays consistent across devices.',
      ],
    },
    {
      heading: 'Managing Your Account',
      content: [
        'Your account settings let you update profile information, change passwords, and manage security preferences. See our Account Guide for detailed instructions on each setting.',
      ],
    },
    {
      heading: 'Staying Safe',
      content: [
        'Security is a shared responsibility. Use strong passwords, enable available security features, and review our Security Tips for best practices. If you ever feel your account is compromised, contact support immediately.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Getting Started', path: '/getting-started/' },
    { label: 'Login Guide', path: '/login-guide/' },
    { label: 'App Guide', path: '/app-guide/' },
    { label: 'Account Guide', path: '/account-guide/' },
    { label: 'Website Guide', path: '/website-guide/' },
    { label: 'Features', path: '/features/' },
  ],
};

export const loginGuidePage: PageData = {
  path: '/login-guide/',
  title: 'Gold365 Login Guide — How to Access Your Account',
  description: 'Step-by-step Gold365 login guide. Learn how to log in securely, troubleshoot login issues, and protect your account.',
  h1: 'Gold365 Login Guide',
  breadcrumb: 'Login Guide',
  intro: 'This guide explains how to log in to your Gold365 account, what to do if you encounter problems, and how to keep your login secure.',
  sections: [
    {
      heading: 'How to Log In',
      content: [
        'To log in to Gold365, go to the Login page and enter your registered email address and password. Click the login button to access your account.',
        'Your credentials work across all devices — desktop, tablet, and mobile app. There is no need for separate logins on different devices.',
      ],
    },
    {
      heading: 'First-Time Login',
      content: [
        'If you just registered, your first login confirms that your account is active. After logging in, take a moment to review your account settings and update any profile information.',
        'We recommend reviewing our Account Guide to understand the available settings.',
      ],
    },
    {
      heading: 'Common Login Issues',
      content: [
        'If you cannot log in, the most common causes are:',
      ],
      list: [
        'Incorrect email address or password',
        'Caps Lock enabled while typing your password',
        'Browser cache or cookie issues',
        'Account not yet activated after registration',
      ],
    },
    {
      heading: 'Securing Your Login',
      content: [
        'Always log in from the official Gold365 website or app. Avoid entering your credentials on unfamiliar sites. Use a strong, unique password and consider a password manager.',
        'For more security advice, see our Security Tips and Security Policy pages.',
      ],
    },
  ],
  faq: [
    {
      question: 'Can I stay logged in across sessions?',
      answer: 'Most devices offer a "remember me" option that keeps you logged in. Only use this on personal, trusted devices — never on shared or public computers.',
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'Use the password recovery option on the login page. If you need further help, visit our Login Help page for step-by-step instructions.',
    },
  ],
  relatedLinks: [
    { label: 'Login Help', path: '/login-help/' },
    { label: 'Registration Guide', path: '/registration-guide/' },
    { label: 'Account Guide', path: '/account-guide/' },
    { label: 'Security Tips', path: '/security-tips/' },
  ],
};

export const appGuidePage: PageData = {
  path: '/app-guide/',
  title: 'Gold365 App Guide — Installation, Features & Usage',
  description: 'Complete Gold365 app guide covering installation, key features, settings, updates, and troubleshooting for the mobile app.',
  h1: 'Gold365 App Guide',
  breadcrumb: 'App Guide',
  intro: 'The Gold365 mobile app enhances your experience with faster performance and a touch-optimized interface. This guide covers everything from installation to advanced usage.',
  sections: [
    {
      heading: 'Installing the App',
      content: [
        'The Gold365 app is distributed as an APK file for Android devices. To install it, download the APK from our APK Download page, enable unknown source installations in your device settings, and run the installer.',
        'For detailed installation steps, see our Installation Guide.',
      ],
    },
    {
      heading: 'First Launch',
      content: [
        'When you first open the app, you will be prompted to log in. Use the same credentials as the web version — your account is shared across all platforms.',
        'After logging in, the app dashboard displays available games and options, just like the web version but optimized for mobile.',
      ],
    },
    {
      heading: 'App Settings',
      content: [
        'The app includes several settings you can customize:',
      ],
      list: [
        'Notification preferences for account activity',
        'Data usage controls for mobile networks',
        'Display and theme options',
        'Security and privacy settings',
      ],
    },
    {
      heading: 'Updating the App',
      content: [
        'Updates are released periodically to improve performance and add features. When an update is available, you will be notified within the app. Visit our App Updates page for information on the latest version.',
      ],
    },
  ],
  faq: [
    {
      question: 'Is the Gold365 app available on iOS?',
      answer: 'Currently, the Gold365 app is available for Android devices. iOS users can access the platform through their mobile browser with full functionality.',
    },
    {
      question: 'Does the app use a lot of data?',
      answer: 'The app is optimized to use less data than the browser version. You can also adjust data usage settings within the app to further reduce consumption.',
    },
  ],
  relatedLinks: [
    { label: 'APK Download', path: '/apk/' },
    { label: 'APK Guide', path: '/apk-guide/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
    { label: 'App Updates', path: '/app-updates/' },
  ],
};

export const apkGuidePage: PageData = {
  path: '/apk-guide/',
  title: 'Gold365 APK Guide — Safe Download & Installation',
  description: 'Detailed Gold365 APK guide with download instructions, installation steps, safety tips, and troubleshooting for Android users.',
  h1: 'Gold365 APK Guide',
  breadcrumb: 'APK Guide',
  intro: 'The Gold365 APK is the installation file for the Android app. This guide walks you through downloading, installing, and managing the APK safely.',
  sections: [
    {
      heading: 'What Is an APK File?',
      content: [
        'An APK (Android Package Kit) is the file format used by Android to distribute and install applications. It contains all the elements the app needs to run on your device.',
        'Apps distributed outside the Google Play Store use APK files for installation. This is common for many applications and is safe when the source is trusted.',
      ],
    },
    {
      heading: 'Downloading the APK',
      content: [
        'To download the Gold365 APK, visit our APK Download page. Tap the download link and the file will be saved to your device.',
        'Only download the APK from the official Gold365 source. Third-party websites may distribute modified or malicious versions.',
      ],
    },
    {
      heading: 'Installing the APK',
      content: [
        'Before installing, enable "Install Unknown Apps" in your device settings for your browser or file manager. Then open the downloaded APK file and tap "Install."',
        'For a complete walkthrough, see our Installation Guide.',
      ],
    },
    {
      heading: 'Verifying APK Safety',
      content: [
        'After installation, verify that the app launches correctly and displays the Gold365 interface. If anything looks unusual, uninstall the app and contact support.',
        'Review our Security Tips for more information on app safety.',
      ],
    },
  ],
  faq: [
    {
      question: 'Is it safe to install APK files?',
      answer: 'APK files are safe when downloaded from trusted, official sources. Always verify the source before installing, and keep your device security settings active.',
    },
    {
      question: 'Why is the APK not on the Play Store?',
      answer: 'Some apps are distributed directly rather than through app stores. This is a common practice and does not indicate any problem with the app itself.',
    },
  ],
  relatedLinks: [
    { label: 'APK Download', path: '/apk/' },
    { label: 'Download Help', path: '/download-help/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
    { label: 'Security Tips', path: '/security-tips/' },
  ],
};

export const downloadGuidePage: PageData = {
  path: '/download-guide/',
  title: 'Gold365 Download Guide — All Download Options Explained',
  description: 'Complete Gold365 download guide covering the Android app, browser access, system requirements, and download troubleshooting.',
  h1: 'Gold365 Download Guide',
  breadcrumb: 'Download Guide',
  intro: 'This guide covers every way to access Gold365 — from the Android app to browser-based access — and helps you choose the option that best fits your needs.',
  sections: [
    {
      heading: 'Download Options',
      content: [
        'Gold365 can be accessed in two ways:',
      ],
      list: [
        'Mobile App: Download the APK for Android devices from our APK Download page',
        'Web Browser: Access the platform directly from any modern browser without installing anything',
      ],
    },
    {
      heading: 'Which Option Is Right for You?',
      content: [
        'If you use Gold365 regularly on a mobile device, the app is the better choice. It offers faster performance, push notifications, and a more native experience.',
        'If you use Gold365 occasionally, on a desktop, or on an iOS device, the browser version provides full functionality without any installation.',
      ],
    },
    {
      heading: 'System Requirements',
      content: [
        'Before downloading, ensure your device is compatible:',
      ],
      list: [
        'Android 7.0 or higher for the mobile app',
        'Chrome, Firefox, Safari, or Edge for browser access',
        'At least 100MB of free storage for the app',
        'A stable internet connection',
      ],
    },
    {
      heading: 'Download Troubleshooting',
      content: [
        'If your download fails or the file is corrupted, try the following: clear your browser cache, check your internet connection, and re-download the file. For persistent issues, visit our Download Help page.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Download', path: '/download/' },
    { label: 'APK Download', path: '/apk/' },
    { label: 'Download Help', path: '/download-help/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
  ],
};

export const registrationGuidePage: PageData = {
  path: '/registration-guide/',
  title: 'Gold365 Registration Guide — How to Create an Account',
  description: 'Step-by-step Gold365 registration guide. Learn how to create your account, verify your information, and get started on the platform.',
  h1: 'Gold365 Registration Guide',
  breadcrumb: 'Registration Guide',
  intro: 'Creating a Gold365 account is the first step to accessing the platform. This guide walks you through the entire registration process.',
  sections: [
    {
      heading: 'Before You Register',
      content: [
        'To register, you will need a valid email address and a secure password. Choose a password that is unique to Gold365 and not used on any other site.',
        'Make sure you are on the official Gold365 registration page to protect your information.',
      ],
    },
    {
      heading: 'Registration Steps',
      content: [
        'Follow these steps to create your account:',
      ],
      list: [
        'Go to the Register page',
        'Enter your email address',
        'Create a strong password',
        'Review and accept the terms and conditions',
        'Submit the registration form',
        'Follow any confirmation instructions if prompted',
      ],
    },
    {
      heading: 'After Registration',
      content: [
        'Once your account is created, you can log in immediately. Take a moment to review your account settings and update your profile information.',
        'We recommend reading our Getting Started guide for an overview of what to do next.',
      ],
    },
    {
      heading: 'Registration Tips',
      content: [
        'Use a password manager to generate and store a strong password. Double-check your email address for typos — an incorrect email can cause issues with account recovery later.',
        'If you encounter problems during registration, our Registration Help page covers common issues and solutions.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Register', path: '/register/' },
    { label: 'Registration Help', path: '/registration-help/' },
    { label: 'Login Guide', path: '/login-guide/' },
    { label: 'Getting Started', path: '/getting-started/' },
  ],
};

export const accountGuidePage: PageData = {
  path: '/account-guide/',
  title: 'Gold365 Account Guide — Managing Your Account Settings',
  description: 'Learn how to manage your Gold365 account including profile settings, password changes, security options, and account preferences.',
  h1: 'Gold365 Account Guide',
  breadcrumb: 'Account Guide',
  intro: 'Your Gold365 account is your gateway to the platform. This guide explains how to manage your account settings, keep your information current, and maintain security.',
  sections: [
    {
      heading: 'Account Settings Overview',
      content: [
        'After logging in, you can access your account settings from the dashboard. Here you can update your profile, change your password, and manage security preferences.',
        'Each setting is designed to give you control over your account and how it functions.',
      ],
    },
    {
      heading: 'Updating Your Profile',
      content: [
        'Your profile includes your email address and any optional information you have provided. Keep your email address current — it is essential for account recovery and communication.',
        'To update your profile, navigate to the account settings page and edit the relevant fields.',
      ],
    },
    {
      heading: 'Changing Your Password',
      content: [
        'We recommend changing your password periodically for security. Choose a new password that is strong and unique. Avoid reusing passwords from other accounts.',
        'If you suspect your password has been compromised, change it immediately and contact support.',
      ],
    },
    {
      heading: 'Account Security',
      content: [
        'Account security is a shared responsibility. Use strong passwords, log out from shared devices, and monitor your account for unusual activity.',
        'Review our Security Tips and Security Policy pages for detailed guidance on keeping your account safe.',
      ],
    },
  ],
  faq: [
    {
      question: 'Can I have multiple Gold365 accounts?',
      answer: 'Gold365 allows one account per user. Creating multiple accounts may violate our terms of service. If you need to update your account information, use the account settings page.',
    },
    {
      question: 'How do I close my account?',
      answer: 'To close your account, contact our support team through the Contact page. They will guide you through the process and address any outstanding matters.',
    },
  ],
  relatedLinks: [
    { label: 'Account Help', path: '/account-help/' },
    { label: 'Login Guide', path: '/login-guide/' },
    { label: 'Security Tips', path: '/security-tips/' },
    { label: 'Registration Guide', path: '/registration-guide/' },
  ],
};

export const mobileGuidePage: PageData = {
  path: '/mobile-guide/',
  title: 'Gold365 Mobile Guide — Using Gold365 on Your Phone',
  description: 'Complete mobile guide for Gold365. Learn about the mobile app, browser access, mobile features, and tips for the best mobile experience.',
  h1: 'Gold365 Mobile Guide',
  breadcrumb: 'Mobile Guide',
  intro: 'Gold365 is fully optimized for mobile use. This guide covers everything you need to know about accessing and using Gold365 on your phone or tablet.',
  sections: [
    {
      heading: 'Mobile Access Options',
      content: [
        'You can access Gold365 on mobile in two ways: through the dedicated Android app or through your mobile browser. Both provide full access to the platform.',
        'The app offers better performance and push notifications, while the browser version requires no installation and works on all devices.',
      ],
    },
    {
      heading: 'Using the Mobile App',
      content: [
        'The Gold365 app is designed specifically for mobile devices. It features a touch-optimized interface, faster load times, and lower data usage compared to the browser version.',
        'Download the app from our APK Download page and follow the Installation Guide to get started.',
      ],
    },
    {
      heading: 'Using the Mobile Browser Version',
      content: [
        'If you prefer not to install an app, simply open your browser and navigate to the Gold365 website. The responsive design adapts to your screen size automatically.',
        'All features available on desktop are also available on mobile browser, though navigation may feel slightly different on a smaller screen.',
      ],
    },
    {
      heading: 'Tips for Mobile Users',
      content: [
        'For the best mobile experience:',
      ],
      list: [
        'Use a stable Wi-Fi or cellular connection for smooth gameplay',
        'Keep the app updated to the latest version',
        'Enable notifications for important account activity',
        'Log out when using shared devices',
        'Bookmark the Gold365 website for quick access',
      ],
    },
  ],
  relatedLinks: [
    { label: 'App Guide', path: '/app-guide/' },
    { label: 'Mobile Guide (Blog)', path: '/mobile-guide/' },
    { label: 'APK Download', path: '/apk/' },
    { label: 'Features', path: '/features/' },
  ],
};

export const websiteGuidePage: PageData = {
  path: '/website-guide/',
  title: 'Gold365 Website Guide — Navigating the Platform',
  description: 'A tour of the Gold365 website. Learn how to navigate the platform, find games, access settings, and use all available features.',
  h1: 'Gold365 Website Guide',
  breadcrumb: 'Website Guide',
  intro: 'This guide provides a complete tour of the Gold365 website, helping you understand the layout, navigation, and key features available to you.',
  sections: [
    {
      heading: 'Website Layout',
      content: [
        'The Gold365 website is organized with a clear header navigation, a main content area, and a comprehensive footer. The header provides quick access to key pages, while the footer contains links to all important sections.',
        'On mobile devices, the navigation collapses into a hamburger menu for easy access without taking up screen space.',
      ],
    },
    {
      heading: 'Key Pages',
      content: [
        'The most important pages on the Gold365 website include:',
      ],
      list: [
        'Home: The main landing page with an overview of the platform',
        'About: Information about Gold365 and our mission',
        'Guide: Comprehensive guides covering every aspect of the platform',
        'Download: Access the mobile app and browser version',
        'Help: Support resources and troubleshooting',
        'Contact: Reach our support team',
      ],
    },
    {
      heading: 'Finding What You Need',
      content: [
        'The guide section is the best starting point for learning about specific features. If you have a specific question, the FAQ page covers the most common topics.',
        'For account-related issues, the Account Guide and Account Help pages provide detailed instructions.',
      ],
    },
    {
      heading: 'Using the Footer',
      content: [
        'The footer contains links to all major sections of the site, including legal pages, support resources, and the sitemap. It is a quick way to navigate to any page from anywhere on the site.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Gold365 Guide', path: '/guide/' },
    { label: 'Features', path: '/features/' },
    { label: 'Help Center', path: '/help/' },
    { label: 'FAQ', path: '/faq/' },
  ],
};
