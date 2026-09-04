import type { PageData } from '@/components/InfoPage';

export const aboutPage: PageData = {
  path: '/about/',
  title: 'About Gold365 — Our Mission & Platform Overview',
  description: 'Learn about Gold365, our mission to provide a secure and user-friendly online gaming platform, and what sets us apart.',
  h1: 'About Gold365',
  breadcrumb: 'About Us',
  intro: 'Gold365 is an online gaming and entertainment platform designed to offer users a seamless, secure, and engaging experience. This page explains who we are, what we stand for, and how we serve our community.',
  sections: [
    {
      heading: 'Who We Are',
      content: [
        'Gold365 provides a digital platform where users can access a variety of online games and entertainment options. Our focus is on delivering a reliable, easy-to-use experience that works across desktop and mobile devices.',
        'We believe that online gaming should be accessible, transparent, and built on trust. Every decision we make — from platform design to customer support — is guided by those principles.',
      ],
    },
    {
      heading: 'Our Mission',
      content: [
        'Our mission is to create a gaming environment that is straightforward, secure, and enjoyable for users of all experience levels. We aim to remove friction from the user journey — from registration and login to gameplay and withdrawals.',
        'We invest in technology, security, and support to ensure that every interaction with Gold365 meets a high standard of quality.',
      ],
    },
    {
      heading: 'What Sets Us Apart',
      content: [
        'Several factors distinguish Gold365 from other platforms in the online gaming space:',
      ],
      list: [
        'A clean, intuitive interface that works on any device',
        'Dedicated mobile app for Android users with quick installation',
        'Comprehensive help center and troubleshooting resources',
        'Clear, honest guides that walk users through every step',
        'A commitment to responsible use and user safety',
      ],
    },
    {
      heading: 'Our Commitment to Users',
      content: [
        'We take our responsibility to users seriously. That means providing accurate information, maintaining strong security practices, and offering resources for those who want to manage their gaming habits.',
        'We encourage every user to review our Responsible Use Policy and Safety & Security pages to understand the tools and guidelines available to them.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Contact Us', path: '/contact/' },
    { label: 'How It Works', path: '/how-it-works/' },
    { label: 'Safety & Security', path: '/security/' },
    { label: 'Responsible Use', path: '/responsible-use/' },
  ],
};

export const howItWorksPage: PageData = {
  path: '/how-it-works/',
  title: 'How Gold365 Works — Step-by-Step Platform Guide',
  description: 'Understand how Gold365 works from registration to gameplay. A clear, step-by-step overview of the entire platform flow.',
  h1: 'How Gold365 Works',
  breadcrumb: 'How It Works',
  intro: 'Gold365 is designed to be simple from the moment you arrive. This page walks you through the complete user journey — from creating an account to accessing games and managing your experience.',
  sections: [
    {
      heading: 'Step 1: Register an Account',
      content: [
        'The first step is creating your Gold365 account. Visit the registration page, enter the required details, and verify your information. The process is designed to take only a few minutes.',
        'You will need a valid email address and a secure password. We recommend reviewing our Registration Guide for a detailed walkthrough.',
      ],
    },
    {
      heading: 'Step 2: Log In to Your Account',
      content: [
        'Once your account is created, you can log in from any device — desktop, tablet, or phone. Your credentials work across all platforms, so there is no need for separate accounts.',
        'If you encounter any issues during login, our Login Help page covers the most common problems and their solutions.',
      ],
    },
    {
      heading: 'Step 3: Download the App (Optional)',
      content: [
        'For the best mobile experience, you can download the Gold365 app on your Android device. The app provides faster access, push notifications, and a smoother interface compared to the mobile browser version.',
        'Visit our Download page or APK Guide for installation instructions.',
      ],
    },
    {
      heading: 'Step 4: Explore the Platform',
      content: [
        'After logging in, you can explore the available games and entertainment options. The platform is organized into clear categories so you can find what you are looking for quickly.',
        'New users may benefit from reading our Beginner Guide, which explains the interface and key features in detail.',
      ],
    },
    {
      heading: 'Step 5: Get Support When You Need It',
      content: [
        'If you ever have questions or run into an issue, our Help Center and FAQ pages are available around the clock. For account-specific concerns, use the Contact page to reach our support team.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Getting Started', path: '/getting-started/' },
    { label: 'Registration Guide', path: '/registration-guide/' },
    { label: 'Login Guide', path: '/login-guide/' },
    { label: 'Download Guide', path: '/download-guide/' },
  ],
};

export const gettingStartedPage: PageData = {
  path: '/getting-started/',
  title: 'Getting Started with Gold365 — New User Quick Start',
  description: 'New to Gold365? This quick-start guide covers everything you need to begin — registration, login, app download, and first steps.',
  h1: 'Getting Started with Gold365',
  breadcrumb: 'Getting Started',
  intro: 'Welcome to Gold365. If you are new to the platform, this page will guide you through everything you need to get up and running in minutes.',
  sections: [
    {
      heading: 'Create Your Account',
      content: [
        'Before you can use Gold365, you need to register. Go to the Register page and fill in your details. Make sure to use a valid email address and a strong, unique password.',
        'After submitting the form, you may receive a confirmation. Follow the instructions to activate your account.',
      ],
    },
    {
      heading: 'Log In for the First Time',
      content: [
        'With your account created, head to the Login page and enter your credentials. If this is your first time, take a moment to familiarize yourself with the dashboard layout.',
        'Save your login details securely. We strongly recommend using a password manager to keep your credentials safe.',
      ],
    },
    {
      heading: 'Download the Mobile App',
      content: [
        'For on-the-go access, download the Gold365 app on your Android device. The app offers a faster, more responsive experience than the browser version.',
        'See the APK Download page for the direct download link and step-by-step installation instructions.',
      ],
    },
    {
      heading: 'Explore Key Features',
      content: [
        'Once you are logged in, take some time to explore. Our Features page provides a full overview of what the platform offers, including game categories, account tools, and security settings.',
      ],
    },
    {
      heading: 'Need Help?',
      content: [
        'If anything is unclear, visit our Help Center or check the FAQ page. Our Beginner Guide is also a great resource for first-time users.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Beginner Guide', path: '/beginner-guide/' },
    { label: 'Gold365 Guide', path: '/guide/' },
    { label: 'Registration Guide', path: '/registration-guide/' },
    { label: 'App Guide', path: '/app-guide/' },
  ],
};

export const featuresPage: PageData = {
  path: '/features/',
  title: 'Gold365 Features — Platform Capabilities & Tools',
  description: 'Explore the key features of Gold365 including cross-device access, mobile app, security tools, support resources, and user-friendly design.',
  h1: 'Gold365 Features',
  breadcrumb: 'Features',
  intro: 'Gold365 is built to provide a smooth, secure, and versatile gaming experience. This page highlights the core features that define the platform.',
  sections: [
    {
      heading: 'Cross-Device Accessibility',
      content: [
        'Gold365 works on desktop, tablet, and mobile devices. Your account syncs across all platforms, so you can switch devices without losing progress or needing to re-register.',
        'The responsive design adapts to any screen size, ensuring a consistent experience whether you are on a large monitor or a compact phone.',
      ],
    },
    {
      heading: 'Dedicated Mobile App',
      content: [
        'For Android users, Gold365 offers a dedicated mobile app. The app provides faster load times, push notifications, and an interface optimized for touch interaction.',
        'Installation is straightforward — see our APK Guide for detailed steps.',
      ],
    },
    {
      heading: 'Security & Account Protection',
      content: [
        'Account security is a top priority. Gold365 employs industry-standard encryption and secure authentication practices to protect user data.',
        'Users are encouraged to use strong passwords and review our Security Tips page for best practices.',
      ],
    },
    {
      heading: 'Comprehensive Support Resources',
      content: [
        'We provide an extensive library of guides, FAQs, and troubleshooting articles. Whether you need help with login, downloads, or account management, there is a resource available.',
        'Our Help Center serves as the central hub for all support content.',
      ],
    },
    {
      heading: 'Responsible Use Tools',
      content: [
        'Gold365 is committed to responsible gaming. We provide information and resources to help users manage their activity, including our Responsible Use Policy.',
        'We encourage all users to set personal limits and game responsibly.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'App Guide', path: '/app-guide/' },
    { label: 'Account Guide', path: '/account-guide/' },
    { label: 'Security Tips', path: '/security-tips/' },
    { label: 'Mobile Guide', path: '/mobile-guide/' },
  ],
};

export const downloadPage: PageData = {
  path: '/download/',
  title: 'Download Gold365 — App & Platform Access',
  description: 'Download the Gold365 app for Android or access the platform from your browser. Complete download guide with installation steps.',
  h1: 'Download Gold365',
  breadcrumb: 'Download',
  intro: 'Gold365 is available as a mobile app for Android devices and can also be accessed directly through any modern web browser. This page covers all your download options.',
  sections: [
    {
      heading: 'Android App Download',
      content: [
        'The Gold365 Android app provides the fastest and most responsive mobile experience. It is available as an APK file that you can install directly on your device.',
        'To download the APK, visit our APK Download page. You will find the direct download link along with step-by-step installation instructions.',
      ],
    },
    {
      heading: 'Browser Access',
      content: [
        'If you prefer not to install an app, you can access Gold365 through any modern web browser. Simply navigate to the platform URL and log in with your credentials.',
        'The browser version is fully functional and responsive, though the app offers slightly better performance on mobile devices.',
      ],
    },
    {
      heading: 'System Requirements',
      content: [
        'Before downloading, make sure your device meets the minimum requirements:',
      ],
      list: [
        'Android 7.0 or higher for the mobile app',
        'A modern web browser (Chrome, Firefox, Safari, Edge) for browser access',
        'Stable internet connection',
        'Sufficient storage space for the APK file',
      ],
    },
    {
      heading: 'Installation Help',
      content: [
        'If you have trouble downloading or installing the app, our Installation Guide and Download Help pages provide detailed troubleshooting steps.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'APK Download', path: '/apk/' },
    { label: 'Download Guide', path: '/download-guide/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
    { label: 'Download Help', path: '/download-help/' },
  ],
};

export const apkPage: PageData = {
  path: '/apk/',
  title: 'Gold365 APK Download — Direct Android App Installation',
  description: 'Download the Gold365 APK for Android. Direct download link with complete installation guide and troubleshooting tips.',
  h1: 'Gold365 APK Download',
  breadcrumb: 'APK Download',
  intro: 'The Gold365 APK is the Android installation file for the Gold365 app. This page provides everything you need to download and install it safely.',
  sections: [
    {
      heading: 'How to Download the APK',
      content: [
        'To download the Gold365 APK, you will need to enable installations from unknown sources on your Android device. This is a standard step for apps distributed outside the Google Play Store.',
        'Go to Settings > Security (or Privacy) on your device and toggle on "Install Unknown Apps" or "Unknown Sources" for your browser app.',
      ],
    },
    {
      heading: 'Installation Steps',
      content: [
        'Once the APK file is downloaded, follow these steps:',
      ],
      list: [
        'Open the downloaded APK file from your notifications or file manager',
        'Tap "Install" when prompted',
        'Wait for the installation to complete',
        'Open the Gold365 app and log in with your credentials',
      ],
    },
    {
      heading: 'Safety Considerations',
      content: [
        'Only download the Gold365 APK from the official source. Installing APK files from unverified websites can expose your device to security risks.',
        'We recommend reviewing our Security Tips page before installing any app from outside an official app store.',
      ],
    },
    {
      heading: 'Troubleshooting APK Installation',
      content: [
        'If the installation fails, common causes include insufficient storage, an incompatible Android version, or a corrupted download. Visit our Troubleshooting page for solutions to these and other issues.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'APK Guide', path: '/apk-guide/' },
    { label: 'Download Help', path: '/download-help/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
    { label: 'App Updates', path: '/app-updates/' },
  ],
};

export const appPage: PageData = {
  path: '/app/',
  title: 'Gold365 App — Mobile Gaming Experience',
  description: 'Learn about the Gold365 mobile app, its features, performance benefits, and how it compares to the browser version of the platform.',
  h1: 'The Gold365 App',
  breadcrumb: 'App',
  intro: 'The Gold365 app brings the full platform experience to your mobile device. This page explains what the app offers and why you might choose it over the browser version.',
  sections: [
    {
      heading: 'Why Use the App?',
      content: [
        'The Gold365 app is designed for speed and convenience. It loads faster than the browser version, uses less data, and provides a smoother interface tailored for touch screens.',
        'Push notifications keep you informed about important updates, and the app integrates seamlessly with your device for a native feel.',
      ],
    },
    {
      heading: 'Key App Features',
      content: [
        'The app includes all the features available on the web platform, plus several mobile-specific enhancements:',
      ],
      list: [
        'Faster load times and reduced data usage',
        'Push notifications for account activity',
        'Optimized touch interface',
        'Quick access from your home screen',
        'Seamless account sync across devices',
      ],
    },
    {
      heading: 'App vs. Browser',
      content: [
        'Both the app and browser versions provide full access to Gold365. The app is recommended for regular mobile users who want the best performance. The browser version is ideal for occasional access or for users on iOS devices.',
        'Your account works on both, so you can switch between them freely.',
      ],
    },
    {
      heading: 'Keeping the App Updated',
      content: [
        'We regularly release updates to improve performance, add features, and fix issues. Visit our App Updates page to learn how to keep your app current.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'App Guide', path: '/app-guide/' },
    { label: 'App Updates', path: '/app-updates/' },
    { label: 'APK Download', path: '/apk/' },
    { label: 'Mobile Guide', path: '/mobile-guide/' },
  ],
};
