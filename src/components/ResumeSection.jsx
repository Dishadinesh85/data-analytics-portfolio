import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ResumeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Resume & CV</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Resume Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Download Section */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
              <div className="glass dark:glass-dark p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-2xl font-bold mb-2">Download Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Get a PDF copy of my complete resume and CV
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                  Download PDF
                </button>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                {[
                  { label: 'Experience', value: '2+ years' },
                  { label: 'Projects', value: '15+' },
                  { label: 'Certifications', value: '6' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass dark:glass-dark p-4 rounded-lg text-center"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resume Preview */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="glass dark:glass-dark p-8 rounded-xl space-y-6 max-h-96 overflow-y-auto">
                {/* Work Experience */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">💼</span> Work Experience
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        role: 'Data Analytics Intern',
                        company: 'Tech Corp Ltd',
                        period: 'Jun 2023 - Present',
                        desc: 'Developed dashboards and performed analysis',
                      },
                      {
                        role: 'Junior Data Analyst',
                        company: 'Analytics Startup',
                        period: 'Jan 2023 - May 2023',
                        desc: 'Analyzed sales data and created visualizations',
                      },
                    ].map((job, idx) => (
                      <div
                        key={idx}
                        className="border-l-2 border-primary-500 pl-4 pb-4"
                      >
                        <p className="font-bold text-lg">{job.role}</p>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {job.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {job.period}
                        </p>
                        <p className="text-sm mt-1">{job.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎓</span> Education
                  </h3>
                  <div className="border-l-2 border-secondary-500 pl-4">
                    <p className="font-bold text-lg">Bachelor of Technology - CS</p>
                    <p className="text-secondary-600 dark:text-secondary-400 font-semibold">
                      Your University Name
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Expected Graduation: 2024
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Let's Connect <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeSection;
