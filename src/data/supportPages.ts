import type { PageData } from '@/components/InfoPage';

export const helpCenterPage: PageData = {
  path: '/help/',
  title: 'Gold365 Help Center — Support Resources & Guides',
  description: 'The Gold365 Help Center is your central hub for support. Find guides, FAQs, troubleshooting tips, and contact information.',
  h1: 'Gold365 Help Center',
  breadcrumb: 'Help Center',
  intro: 'Welcome to the Gold365 Help Center. This is your central hub for all support resources. Whether you need help with login, downloads, account management, or security, you will find the answers here.',
  sections: [
    {
      heading: 'How to Use the Help Center',
      content: [
        'The Help Center is organized by topic. Browse the categories below to find the information you need. Each category links to detailed guides and troubleshooting articles.',
        'If you cannot find what you are looking for, use the Contact page to reach our support team directly.',
      ],
    },
    {
      heading: 'Getting Started',
      content: [
        'New to Gold365? Start with these resources:',
      ],
      list: [
        'Getting Started Guide — A quick-start overview for new users',
        'Registration Guide — How to create your account',
        'Login Guide — How to access your account',
        'Beginner Guide — A detailed introduction to the platform',
      ],
    },
    {
      heading: 'App & Download Support',
      content: [
        'Need help with the app or downloads? Visit these pages:',
      ],
      list: [
        'Download Guide — All download options explained',
        'APK Guide — Safe APK download and installation',
        'Installation Guide — Step-by-step app installation',
        'Download Help — Troubleshooting download issues',
      ],
    },
    {
      heading: 'Account Support',
      content: [
        'For account-related questions:',
      ],
      list: [
        'Account Guide — Managing your account settings',
        'Account Help — Solutions to common account issues',
        'Login Help — Resolving login problems',
        'Registration Help — Fixing registration issues',
      ],
    },
    {
      heading: 'Security & Safety',
      content: [
        'Stay safe with these resources:',
      ],
      list: [
        'Safety & Security — Platform security overview',
        'Security Tips — Best practices for account safety',
        'Responsible Use — Managing your gaming activity',
        'Security Policy — Our security commitments',
      ],
    },
  ],
  relatedLinks: [
    { label: 'FAQ', path: '/faq/' },
    { label: 'Contact Us', path: '/contact/' },
    { label: 'Troubleshooting', path: '/troubleshooting/' },
    { label: 'Getting Started', path: '/getting-started/' },
  ],
};

export const faqPage: PageData = {
  path: '/faq/',
  title: 'Gold365 FAQ — Frequently Asked Questions',
  description: 'Find answers to the most frequently asked questions about Gold365, covering registration, login, downloads, account management, and more.',
  h1: 'Gold365 Frequently Asked Questions',
  breadcrumb: 'FAQ',
  intro: 'This page answers the most common questions about Gold365. If you cannot find the answer you are looking for, visit our Help Center or Contact page for further assistance.',
  sections: [
    {
      heading: 'Registration & Account',
      content: [
        'Common questions about creating and managing your Gold365 account.',
      ],
    },
    {
      heading: 'How do I create a Gold365 account?',
      content: [
        'Visit the Register page, enter your email address and a secure password, accept the terms, and submit the form. See our Registration Guide for detailed instructions.',
      ],
    },
    {
      heading: 'Can I change my email address?',
      content: [
        'You can update your email address in the account settings page after logging in. Make sure the new email is valid and accessible.',
      ],
    },
    {
      heading: 'How do I change my password?',
      content: [
        'Navigate to account settings and use the password change option. Choose a strong, unique password. See our Account Guide for details.',
      ],
    },
    {
      heading: 'Login & Access',
      content: [
        'Questions about logging in and accessing the platform.',
      ],
    },
    {
      heading: 'Why can I not log in?',
      content: [
        'The most common causes are an incorrect password, Caps Lock being enabled, or browser cache issues. Visit our Login Help page for troubleshooting steps.',
      ],
    },
    {
      heading: 'Can I use Gold365 on multiple devices?',
      content: [
        'Yes. Your account works across all devices — desktop, tablet, and mobile. Simply log in with the same credentials on each device.',
      ],
    },
    {
      heading: 'App & Downloads',
      content: [
        'Questions about the mobile app and downloads.',
      ],
    },
    {
      heading: 'How do I download the Gold365 app?',
      content: [
        'The app is available as an APK for Android. Visit our APK Download page for the download link and installation instructions.',
      ],
    },
    {
      heading: 'Is the app available for iOS?',
      content: [
        'Currently, the app is available for Android only. iOS users can access Gold365 through their mobile browser with full functionality.',
      ],
    },
    {
      heading: 'Security & Safety',
      content: [
        'Questions about keeping your account safe.',
      ],
    },
    {
      heading: 'Is Gold365 safe to use?',
      content: [
        'Gold365 employs industry-standard security practices. Users should also follow best practices — use strong passwords, log out from shared devices, and review our Security Tips.',
      ],
    },
    {
      heading: 'What should I do if I suspect unauthorized access?',
      content: [
        'Change your password immediately and contact our support team through the Contact page. Review our Security Tips for additional steps.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Help Center', path: '/help/' },
    { label: 'Contact Us', path: '/contact/' },
    { label: 'Troubleshooting', path: '/troubleshooting/' },
    { label: 'FAQ Guide', path: '/faq-guide/' },
  ],
};

export const loginHelpPage: PageData = {
  path: '/login-help/',
  title: 'Gold365 Login Help — Fix Login Problems',
  description: 'Having trouble logging in to Gold365? This page covers common login issues and step-by-step solutions to get you back into your account.',
  h1: 'Gold365 Login Help',
  breadcrumb: 'Login Help',
  intro: 'If you are having trouble logging in to Gold365, this page will help you identify and resolve the issue. We cover the most common problems and their solutions.',
  sections: [
    {
      heading: 'Incorrect Password',
      content: [
        'The most common login issue is an incorrect password. Double-check that you are entering the correct password, paying attention to capitalization and special characters.',
        'Make sure Caps Lock is not enabled. If you have forgotten your password, use the password recovery option on the login page.',
      ],
    },
    {
      heading: 'Email Address Issues',
      content: [
        'Verify that you are using the correct email address — the one you registered with. A typo in your email can prevent login even if your password is correct.',
        'If you no longer have access to your registered email, contact support through the Contact page for assistance.',
      ],
    },
    {
      heading: 'Browser Cache and Cookies',
      content: [
        'Sometimes, stored browser data can interfere with login. Try clearing your browser cache and cookies, then attempt to log in again.',
        'Alternatively, try logging in using an incognito or private browsing window to rule out cache issues.',
      ],
    },
    {
      heading: 'Account Not Activated',
      content: [
        'If you recently registered but cannot log in, your account may not be fully activated yet. Check for any confirmation emails and follow the instructions.',
        'If you did not receive a confirmation, contact support for help activating your account.',
      ],
    },
    {
      heading: 'Still Cannot Log In?',
      content: [
        'If none of the above solutions work, contact our support team through the Contact page. Provide as much detail as possible about the issue you are experiencing.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Login Guide', path: '/login-guide/' },
    { label: 'Help Center', path: '/help/' },
    { label: 'Account Help', path: '/account-help/' },
    { label: 'Contact Us', path: '/contact/' },
  ],
};

export const registrationHelpPage: PageData = {
  path: '/registration-help/',
  title: 'Gold365 Registration Help — Fix Registration Issues',
  description: 'Having trouble registering on Gold365? Find solutions to common registration problems and get help creating your account.',
  h1: 'Gold365 Registration Help',
  breadcrumb: 'Registration Help',
  intro: 'If you are having trouble creating a Gold365 account, this page covers the most common registration issues and how to resolve them.',
  sections: [
    {
      heading: 'Email Already Registered',
      content: [
        'If you see a message that your email is already registered, you may have created an account previously. Try logging in with that email instead of registering again.',
        'If you cannot remember your password, use the password recovery option on the login page.',
      ],
    },
    {
      heading: 'Invalid Email Format',
      content: [
        'Make sure you are entering a valid email address with the correct format (e.g., name@example.com). Check for typos, missing characters, or incorrect domain names.',
      ],
    },
    {
      heading: 'Password Requirements',
      content: [
        'Choose a strong password that meets the platform requirements. A strong password typically includes a mix of uppercase and lowercase letters, numbers, and special characters.',
        'Avoid using passwords that you have used on other websites.',
      ],
    },
    {
      heading: 'Form Submission Errors',
      content: [
        'If the registration form does not submit successfully, check your internet connection and try again. If the issue persists, try a different browser or clear your current browser cache.',
      ],
    },
    {
      heading: 'No Confirmation Email',
      content: [
        'If you do not receive a confirmation email, check your spam or junk folder. If you still cannot find it, contact support through the Contact page for assistance.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Registration Guide', path: '/registration-guide/' },
    { label: 'Login Help', path: '/login-help/' },
    { label: 'Help Center', path: '/help/' },
    { label: 'Contact Us', path: '/contact/' },
  ],
};

export const downloadHelpPage: PageData = {
  path: '/download-help/',
  title: 'Gold365 Download Help — Fix Download Problems',
  description: 'Having trouble downloading the Gold365 app? Find solutions to common download issues including failed downloads and APK errors.',
  h1: 'Gold365 Download Help',
  breadcrumb: 'Download Help',
  intro: 'If you are experiencing issues downloading the Gold365 app, this page provides solutions to the most common download problems.',
  sections: [
    {
      heading: 'Download Fails or Interrupts',
      content: [
        'If your download fails or gets interrupted, check your internet connection first. A weak or unstable connection is the most common cause of failed downloads.',
        'Try switching to a different network (e.g., Wi-Fi instead of cellular) and attempt the download again. If the issue persists, clear your browser cache and retry.',
      ],
    },
    {
      heading: 'APK File Is Corrupted',
      content: [
        'If the APK file does not install or shows an error, the file may be corrupted. Delete the downloaded file and download it again from the official APK Download page.',
        'Make sure you are downloading from the official source to avoid corrupted or modified files.',
      ],
    },
    {
      heading: 'Insufficient Storage',
      content: [
        'If your device does not have enough storage, the download or installation will fail. Free up space by deleting unused apps or files, then try again.',
        'The Gold365 app requires approximately 100MB of free storage.',
      ],
    },
    {
      heading: 'Incompatible Android Version',
      content: [
        'The Gold365 app requires Android 7.0 or higher. If your device is running an older version, the installation will not succeed. Check your Android version in Settings > About Phone.',
        'If your device is not compatible, you can still access Gold365 through your mobile browser.',
      ],
    },
    {
      heading: 'Unknown Sources Not Enabled',
      content: [
        'To install an APK, you must enable "Install Unknown Apps" in your device settings. See our Installation Guide for step-by-step instructions.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Download Guide', path: '/download-guide/' },
    { label: 'APK Download', path: '/apk/' },
    { label: 'Installation Guide', path: '/installation-guide/' },
    { label: 'Troubleshooting', path: '/troubleshooting/' },
  ],
};

export const installationGuidePage: PageData = {
  path: '/installation-guide/',
  title: 'Gold365 App Installation Guide — Step-by-Step Setup',
  description: 'Complete installation guide for the Gold365 Android app. Follow these steps to install the APK safely and correctly.',
  h1: 'Gold365 App Installation Guide',
  breadcrumb: 'Installation Guide',
  intro: 'This guide provides step-by-step instructions for installing the Gold365 app on your Android device. Follow each step carefully to ensure a smooth installation.',
  sections: [
    {
      heading: 'Step 1: Download the APK',
      content: [
        'Go to the APK Download page and tap the download link. The APK file will be saved to your device, typically in the Downloads folder.',
        'Wait for the download to complete fully before proceeding.',
      ],
    },
    {
      heading: 'Step 2: Enable Unknown Sources',
      content: [
        'Before you can install the APK, you need to allow installations from unknown sources:',
      ],
      list: [
        'Open Settings on your Android device',
        'Go to Security or Privacy (the exact name varies by device)',
        'Find "Install Unknown Apps" or "Unknown Sources"',
        'Enable it for your browser or file manager app',
      ],
    },
    {
      heading: 'Step 3: Install the APK',
      content: [
        'Locate the downloaded APK file in your Downloads folder or notification bar. Tap the file to begin installation.',
        'You will see a prompt asking for permission to install. Tap "Install" and wait for the process to complete.',
      ],
    },
    {
      heading: 'Step 4: Open and Log In',
      content: [
        'Once installed, open the Gold365 app from your app drawer. Enter your login credentials to access your account.',
        'If you have not yet registered, visit the Register page first to create an account.',
      ],
    },
    {
      heading: 'Post-Installation',
      content: [
        'After installation, you may want to review the app settings, enable notifications, and adjust preferences. See our App Guide for more information on customizing your experience.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'APK Download', path: '/apk/' },
    { label: 'APK Guide', path: '/apk-guide/' },
    { label: 'Download Help', path: '/download-help/' },
    { label: 'App Guide', path: '/app-guide/' },
  ],
};

export const accountHelpPage: PageData = {
  path: '/account-help/',
  title: 'Gold365 Account Help — Resolve Account Issues',
  description: 'Need help with your Gold365 account? Find solutions to common account problems including password issues, profile updates, and security.',
  h1: 'Gold365 Account Help',
  breadcrumb: 'Account Help',
  intro: 'This page helps you resolve common account-related issues on Gold365. If you cannot find a solution here, contact our support team for further assistance.',
  sections: [
    {
      heading: 'Forgot Your Password',
      content: [
        'If you have forgotten your password, use the password recovery option on the login page. Enter your registered email address and follow the instructions sent to you.',
        'If you do not receive a recovery email, check your spam folder. For further help, see our Login Help page.',
      ],
    },
    {
      heading: 'Cannot Access Your Email',
      content: [
        'If you no longer have access to your registered email, contact our support team through the Contact page. Provide details about your account so we can verify your identity.',
      ],
    },
    {
      heading: 'Profile Update Issues',
      content: [
        'If you are unable to update your profile information, make sure you are logged in and on the account settings page. If the changes do not save, try refreshing the page or using a different browser.',
      ],
    },
    {
      heading: 'Suspicious Account Activity',
      content: [
        'If you notice activity on your account that you did not authorize, change your password immediately and contact support. Review our Security Tips for additional steps to secure your account.',
      ],
    },
    {
      heading: 'Account Locked',
      content: [
        'If your account is locked, it may be due to multiple failed login attempts or a security measure. Contact support through the Contact page to have your account reviewed and restored.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Account Guide', path: '/account-guide/' },
    { label: 'Login Help', path: '/login-help/' },
    { label: 'Security Tips', path: '/security-tips/' },
    { label: 'Contact Us', path: '/contact/' },
  ],
};

export const troubleshootingPage: PageData = {
  path: '/troubleshooting/',
  title: 'Gold365 Troubleshooting — Fix Common Platform Issues',
  description: 'A comprehensive troubleshooting guide for Gold365. Find solutions to login, download, app, and performance issues.',
  h1: 'Gold365 Troubleshooting Guide',
  breadcrumb: 'Troubleshooting',
  intro: 'This troubleshooting guide covers the most common issues users encounter on Gold365 and provides step-by-step solutions for each.',
  sections: [
    {
      heading: 'Login Problems',
      content: [
        'If you cannot log in, try the following steps:',
      ],
      list: [
        'Verify your email and password are correct',
        'Check that Caps Lock is not enabled',
        'Clear your browser cache and cookies',
        'Try an incognito or private browsing window',
        'Use the password recovery option if needed',
      ],
    },
    {
      heading: 'App Will Not Install',
      content: [
        'If the APK does not install, check the following:',
      ],
      list: [
        'Ensure "Install Unknown Apps" is enabled in your device settings',
        'Verify you have enough storage space (at least 100MB)',
        'Check that your Android version is 7.0 or higher',
        'Re-download the APK from the official source if the file is corrupted',
      ],
    },
    {
      heading: 'App Crashes or Freezes',
      content: [
        'If the app crashes or freezes during use:',
      ],
      list: [
        'Close and reopen the app',
        'Restart your device',
        'Check for app updates',
        'Clear the app cache from your device settings',
        'Reinstall the app if the issue persists',
      ],
    },
    {
      heading: 'Slow Performance',
      content: [
        'If the platform is running slowly:',
      ],
      list: [
        'Check your internet connection speed',
        'Close other apps running in the background',
        'Clear your browser cache (for web users)',
        'Try switching between Wi-Fi and cellular data',
        'Update the app to the latest version',
      ],
    },
    {
      heading: 'Page Not Loading',
      content: [
        'If pages do not load properly, try refreshing the page, clearing your browser cache, or switching to a different browser. If the issue persists, the platform may be undergoing maintenance — try again later.',
      ],
    },
    {
      heading: 'Still Having Issues?',
      content: [
        'If none of the solutions above resolve your problem, contact our support team through the Contact page. Provide a detailed description of the issue, including any error messages you are seeing.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Help Center', path: '/help/' },
    { label: 'Login Help', path: '/login-help/' },
    { label: 'Download Help', path: '/download-help/' },
    { label: 'Contact Us', path: '/contact/' },
  ],
};

export const securityPage: PageData = {
  path: '/security/',
  title: 'Gold365 Safety & Security — How We Protect Users',
  description: 'Learn about Gold365 safety and security practices, how we protect user data, and what you can do to keep your account secure.',
  h1: 'Gold365 Safety & Security',
  breadcrumb: 'Safety & Security',
  intro: 'Security is a top priority at Gold365. This page explains the measures we take to protect users and the steps you can take to keep your account safe.',
  sections: [
    {
      heading: 'Our Security Practices',
      content: [
        'Gold365 employs industry-standard security practices to protect user information and platform integrity. This includes encryption for data transmission and secure authentication protocols.',
        'We continuously monitor for potential threats and update our systems to address emerging security challenges.',
      ],
    },
    {
      heading: 'Account Security Tips',
      content: [
        'You play an important role in keeping your account secure. Follow these best practices:',
      ],
      list: [
        'Use a strong, unique password for your Gold365 account',
        'Never share your password with anyone',
        'Log out from shared or public devices',
        'Enable all available security features in your account settings',
        'Monitor your account for unusual activity',
        'Contact support immediately if you suspect unauthorized access',
      ],
    },
    {
      heading: 'Recognizing Phishing Attempts',
      content: [
        'Phishing is a common tactic where attackers impersonate legitimate platforms to steal login credentials. Be cautious of emails or messages asking for your password or directing you to unfamiliar websites.',
        'Always access Gold365 through the official website or app. If you receive a suspicious message claiming to be from Gold365, do not click any links — contact support directly to verify.',
      ],
    },
    {
      heading: 'Responsible Use',
      content: [
        'Security also means using the platform responsibly. We encourage all users to review our Responsible Use Policy and to set personal limits on their gaming activity.',
        'If you feel your gaming habits are becoming problematic, seek help and use the resources available in our Responsible Use page.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Security Tips', path: '/security-tips/' },
    { label: 'Security Policy', path: '/security-policy/' },
    { label: 'Responsible Use', path: '/responsible-use/' },
    { label: 'Responsible Use Policy', path: '/responsible-use/' },
  ],
};

export const responsibleUsePage: PageData = {
  path: '/responsible-use/',
  title: 'Gold365 Responsible Use — Gaming Responsibly',
  description: 'Gold365 is committed to responsible gaming. Learn about our responsible use guidelines, personal limits, and support resources.',
  h1: 'Gold365 Responsible Use',
  breadcrumb: 'Responsible Use',
  intro: 'Gold365 is committed to promoting responsible gaming. This page outlines our responsible use guidelines and provides resources for users who want to manage their gaming activity.',
  sections: [
    {
      heading: 'Our Commitment',
      content: [
        'We believe that gaming should be an enjoyable form of entertainment, not a source of stress or financial difficulty. We encourage all users to approach gaming with awareness and moderation.',
        'Our Responsible Use Policy outlines the principles we follow and the tools we provide to support responsible use.',
      ],
    },
    {
      heading: 'Setting Personal Limits',
      content: [
        'We encourage users to set personal limits on their gaming activity. This includes:',
      ],
      list: [
        'Time limits: Decide how much time you want to spend and stick to it',
        'Financial limits: Only use funds you can afford to spend',
        'Frequency limits: Take regular breaks from gaming',
        'Self-awareness: Monitor your emotional state while gaming',
      ],
    },
    {
      heading: 'Recognizing Problematic Behavior',
      content: [
        'It is important to recognize when gaming may be becoming a problem. Warning signs include:',
      ],
      list: [
        'Spending more time or money than intended',
        'Neglecting responsibilities or relationships',
        'Feeling anxious or irritable when not gaming',
        'Chasing losses or increasing activity to feel the same level of excitement',
        'Hiding gaming activity from others',
      ],
    },
    {
      heading: 'Getting Help',
      content: [
        'If you feel your gaming habits are becoming problematic, we encourage you to seek help. Contact our support team through the Contact page for information about self-exclusion and other tools.',
        'There are also many independent organizations that provide support for gaming-related concerns. Reach out to a professional if you need guidance.',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Responsible Use Policy', path: '/responsible-use/' },
    { label: 'Safety & Security', path: '/security/' },
    { label: 'Security Tips', path: '/security-tips/' },
    { label: 'Help Center', path: '/help/' },
  ],
};
