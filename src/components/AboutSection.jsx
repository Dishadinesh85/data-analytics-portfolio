import { motion } from 'framer-motion';

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  I'm a dedicated final-year Computer Science student with a passion for data-driven decision making.
                  With hands-on experience in data analysis, visualization, and machine learning, I transform complex
                  datasets into meaningful insights that drive business value.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-600 dark:text-secondary-400">
                  Career Objective
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To secure a challenging position as a Data Analyst or Data Scientist where I can leverage my analytical
                  skills, technical expertise, and problem-solving abilities to derive actionable insights and contribute
                  to organizational growth.
                </p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Certifications', value: '6' },
                { label: 'Skills', value: '20+' },
                { label: 'Experience', value: '2+ Yrs' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass dark:glass-dark p-6 rounded-xl text-center hover:scale-105 transition-transform"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills & Soft Skills */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Technical Skills</h3>
              <div className="space-y-3">
                {[
                  { category: 'Languages', skills: 'Python, SQL, R' },
                  { category: 'Databases', skills: 'MySQL, PostgreSQL' },
                  { category: 'Visualization', skills: 'Power BI, Tableau, Matplotlib, Seaborn' },
                  { category: 'Tools', skills: 'Excel, Jupyter, Git, GitHub' },
                  { category: 'ML Libraries', skills: 'Scikit-learn, Pandas, NumPy' },
                ].map((skill, index) => (
                  <div key={index} className="glass dark:glass-dark p-4 rounded-lg">
                    <p className="font-semibold text-primary-600 dark:text-primary-400">
                      {skill.category}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Problem Solving',
                  'Data Analysis',
                  'Communication',
                  'Leadership',
                  'Team Collaboration',
                  'Critical Thinking',
                  'Time Management',
                  'Presentation Skills',
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="glass dark:glass-dark p-4 rounded-lg text-center hover:scale-105 transition-transform"
                  >
                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="glass dark:glass-dark p-8 rounded-xl">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    Bachelor of Technology - Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                    [Your University Name]
                  </p>
                </div>
                <p className="font-semibold text-secondary-600 dark:text-secondary-400 text-lg">
                  2024 - Present
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                CGPA: 8.5+ | Coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Statistics
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
