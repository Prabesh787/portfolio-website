import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <PageWrapper>
      <section className="relative pt-28 pb-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Contact"
            title="Tell me about it."
          />
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
