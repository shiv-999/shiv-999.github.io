// All page copy lives here so it can be reviewed in one place.
// Rule: only verified facts. No employer, client names, testimonials,
// ratings, user counts or outcomes that have not happened.

export const profile = {
  name: 'Shivam Shukla',
  location: 'Pune, India',
  email: 'shivamshukla2223@gmail.com',
  github: 'https://github.com/shiv-999',
  linkedin: 'https://www.linkedin.com/in/shivam-shukla-385502336/',
  education: 'B.Tech (2024), CGPA 9.01/10',
};

export const mailto =
  `mailto:${profile.email}?subject=` + encodeURIComponent('Project enquiry');

export const hero = {
  eyebrow: 'Independent developer · Pune, India · Remote',
  title: 'Small web and Python jobs, done carefully and explained clearly.',
  lead:
    'I fix React and JavaScript bugs, build responsive landing pages and write small Python automation scripts. Every job starts with a written scope and a milestone, and you get plain-English updates along the way.',
  facts: [
    { label: 'Focus', value: 'React / JavaScript fixes, landing pages, Python scripts' },
    { label: 'Hours', value: 'Evenings and weekends, India time (IST, UTC+5:30)' },
    { label: 'Experience', value: 'Nearly three years of professional software development' },
    { label: 'Payment', value: 'Fixed price per milestone, agreed in writing' },
  ],
};

export const problems = [
  {
    q: 'Something on your site is broken and you need it fixed.',
    a: 'A layout that falls apart on mobile, a form that does nothing, a React component that throws errors. I reproduce the problem, fix it and explain what caused it.',
  },
  {
    q: 'You need a simple page that looks right on every screen.',
    a: 'A landing or product page built from your content and design, responsive, accessible and quick to load.',
  },
  {
    q: 'A repetitive task is eating your time.',
    a: 'Renaming files, cleaning a spreadsheet export, pulling data into a CSV. A small Python script can often do it in seconds.',
  },
];

export const services = [
  {
    id: 'fixes',
    title: 'React / JavaScript bug fix',
    outcome: 'A specific bug in your web front end is found, fixed and explained.',
    range: 'US$75–150',
    examples: [
      'Component not rendering or throwing console errors',
      'Broken responsive layout or CSS conflicts',
      'Form validation or state that behaves incorrectly',
    ],
    excludes: 'Full rewrites, backend or database migrations, ongoing maintenance.',
  },
  {
    id: 'landing',
    title: 'Responsive landing page',
    outcome: 'A clean single page built from your copy and brand, ready for you to host.',
    range: 'US$150–300',
    examples: [
      'Up to about five content sections',
      'Mobile-first layout with accessible markup',
      'Static HTML/CSS or React source, your choice',
    ],
    excludes: 'Copywriting, logo or brand design, hosting and domain costs.',
  },
  {
    id: 'python',
    title: 'Small Python automation',
    outcome: 'A documented script that removes a repetitive manual step.',
    range: 'US$100–250',
    examples: [
      'File, folder or CSV/Excel clean-up',
      'Combining or reformatting data exports',
      'A simple Streamlit view of your data',
    ],
    excludes: 'Scraping that breaks a site’s terms, large data pipelines, 24/7 hosting.',
  },
];

export const pricingNote =
  'These are starting estimates, not quotes. After reviewing your requirements I send a written quote with scope, price, milestones, number of revisions, acceptance criteria and payment timing. Work starts only once we both agree it.';

export const process = [
  { step: 'Discovery', text: 'You describe the problem; I ask the questions needed to understand it.' },
  { step: 'Written scope', text: 'A short document: what will be done, what will not, price and dates.' },
  { step: 'Milestone', text: 'The first milestone is funded before work begins.' },
  { step: 'Build', text: 'I do the work and send progress updates, with questions raised early.' },
  { step: 'Review', text: 'You test against the agreed acceptance criteria; revisions are as agreed.' },
  { step: 'Handover', text: 'After final payment you get the full source and short notes on how it works.' },
];

export const reasons = [
  {
    title: 'Professional experience',
    text: 'Nearly three years of professional software development, working from requirements to tested, maintainable code.',
  },
  {
    title: 'Structured debugging',
    text: 'Reproduce, isolate, fix, verify. You hear what was wrong, not just that it is “done”.',
  },
  {
    title: 'Clear explanations',
    text: 'Updates written for non-technical readers, so you always know where the work stands.',
  },
  {
    title: 'Solid foundation',
    text: `${profile.education}.`,
  },
];

export const projects = [
  {
    title: 'Signalcraft — SaaS landing page',
    label: 'Concept project · 2026',
    problem: 'A launch page for an AI marketing product that needs to explain the offer fast and collect early signups.',
    built:
      'A responsive Next.js site with a mobile menu, a monthly/yearly pricing toggle, an accessible FAQ, client-side email validation, and SEO metadata, sitemap and FAQ structured data. Exported as static files for fast hosting.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    shows: 'Turning a product idea into a fast, search-friendly marketing site with interactive React components.',
    status: 'Live demo. Fictional brand; the signup form does not send data.',
    live: 'https://shiv-999.github.io/signalcraft-landing/',
    repo: 'https://github.com/shiv-999/signalcraft-landing',
  },
  {
    title: 'Northfield Advisory — WordPress site',
    label: 'Concept project · 2026',
    problem: 'A consulting firm homepage that a non-technical owner can keep editing after handover.',
    built:
      'Built in the WordPress block editor with Kadence Theme and Kadence Blocks: row layouts, info boxes, icon lists and buttons, with a hidden page title and full-width layout. Checked on phone, tablet and desktop.',
    tech: ['WordPress', 'Kadence Blocks', 'Gutenberg', 'Responsive design'],
    shows: 'Delivering client-editable WordPress pages from a brief, without custom code the owner cannot maintain.',
    status: 'Live demo in WordPress Playground (takes about 20 seconds to load). Fictional company.',
    live: 'https://playground.wordpress.net/?blueprint-url=https://gist.githubusercontent.com/shiv-999/72da20eb326b87083b4047fb89e29c1e/raw/northfield-blueprint.json',
  },
  {
    title: 'React task manager',
    label: 'Personal project',
    problem: 'Keeping a simple list of tasks and seeing what is still open.',
    built:
      'A React single-page app where tasks can be added, marked complete and filtered by all, active or done. Empty input is rejected, and the open-task count is derived with useMemo.',
    tech: ['React', 'Vite', 'JavaScript', 'Bootstrap'],
    shows: 'Component state, derived data and form handling — the same ground most React bug fixes cover.',
    status: 'Learning project. Source code on GitHub.',
    repo: 'https://github.com/shiv-999/my-react-app',
  },
  {
    title: 'UDP live chat',
    label: 'Personal project',
    problem: 'Sending messages between two machines on the same network from the terminal.',
    built:
      'A Python command-line chat using UDP sockets, with separate threads for sending and receiving so both happen at once, and a clean exit when either side leaves.',
    tech: ['Python', 'Sockets', 'Threading', 'Linux'],
    shows: 'Networking basics, concurrency and Linux tooling — useful for scripting and troubleshooting work.',
    status: 'LAN demo only; messages are not encrypted. Source code on GitHub.',
    repo: 'https://github.com/shiv-999/LiveChat-Project',
  },
  {
    title: 'Brain-tumour image classifier',
    label: 'Academic prototype',
    problem: 'Sorting MRI images into four categories as a learning exercise in image classification.',
    built:
      'A TensorFlow/Keras model trained in a Jupyter notebook, with a Streamlit page that accepts an uploaded image, preprocesses it and shows the predicted class.',
    tech: ['Python', 'TensorFlow / Keras', 'Streamlit', 'NumPy'],
    shows: 'Turning a Python model into a usable upload-and-result interface.',
    status: 'Prototype for study only — not a medical tool. Trained model file is not included in the repository.',
    repo: 'https://github.com/shiv-999/Brain_Tumour',
  },
];

export const skills = [
  { group: 'Web', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Python', items: ['Python fundamentals', 'Streamlit', 'TensorFlow / Keras (exposure)'] },
  { group: 'Data', items: ['SQL', 'MySQL'] },
  { group: 'Systems', items: ['Linux', 'Networking', 'UDP socket programming', 'C++'] },
  { group: 'Workflow', items: ['Git', 'GitHub'] },
];

export const supportStrengths = [
  'Turning requirements into working, tested features',
  'Debugging by reproducing, isolating and verifying fixes',
  'Explaining technical choices to non-technical clients',
  'Clean handover notes so the next change is easy',
];

export const terms = [
  'No unpaid trial work on real deliverables.',
  'Work starts after a written scope and a funded deposit or first milestone.',
  'Remaining payment is made before the final source handover.',
  'Payment method, currency and any platform fees are stated in the written quote.',
];

export const enquiryChecklist = [
  'What you need and why',
  'A link or screenshots, if something is broken',
  'Your deadline and rough budget',
];
