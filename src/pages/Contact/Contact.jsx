import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <PageWrapper>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Get In Touch"
            subtitle="Contact Me"
          />
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;

