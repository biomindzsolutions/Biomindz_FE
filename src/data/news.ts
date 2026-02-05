export type NewsItem = {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  imageAlt: string
  body: string
}

export const sampleNews: NewsItem[] = [
  {
    id: '1',
    title: 'BIO MINDZ Solutions Launches Next-Gen Biotech Research Platform',
    date: '2025-01-28',
    category: 'Launch announcements',
    excerpt: 'We are excited to announce the launch of our integrated research platform, designed to accelerate discovery and collaboration across life sciences.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=320&fit=crop',
    imageAlt: 'Laboratory research equipment and technology',
    body: `We are excited to announce the launch of our integrated research platform, designed to accelerate discovery and collaboration across life sciences.

The new platform brings together data management, analysis tools, and collaboration features in a single, secure environment. Researchers can now streamline workflows from hypothesis to publication, with built-in support for regulatory compliance and reproducibility.

Key features include real-time collaboration, version-controlled datasets, and seamless integration with existing lab systems. Our goal is to reduce the time from idea to insight while maintaining the highest standards of data integrity and traceability.

"We built this platform in response to what our partners told us they needed most: less fragmentation, more transparency, and tools that work the way scientists actually work," said our Head of Product.

The platform is available now for early adopters. To learn more or request a demo, get in touch with our team.`
  },
  {
    id: '2',
    title: 'Strategic Partnership with Leading Pharma for Drug Discovery',
    date: '2025-01-22',
    category: 'New partnerships',
    excerpt: 'BIO MINDZ has entered a multi-year collaboration to advance AI-driven drug discovery and biomarker validation.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=320&fit=crop',
    imageAlt: 'Business partnership and collaboration',
    body: `BIO MINDZ has entered a multi-year collaboration to advance AI-driven drug discovery and biomarker validation.

The partnership will combine our computational and data science capabilities with our partner's therapeutic expertise and pipeline. Together we will work on novel targets and modalities, with an emphasis on speed and quality of decision-making.

Areas of focus include target identification, lead optimization, and patient stratification. We will also collaborate on regulatory strategy and evidence generation to support approval pathways.

This agreement reflects our commitment to bringing cutting-edge technology into the heart of drug development. We look forward to sharing progress as the collaboration advances.`
  },
  {
    id: '3',
    title: 'Release of v3.0 Analytics Suite for Genomics',
    date: '2025-01-15',
    category: 'Technology releases',
    excerpt: 'Our latest analytics release brings advanced visualization, cohort analysis, and regulatory-ready reporting to genomics workflows.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=320&fit=crop',
    imageAlt: 'Data analytics and visualization',
    body: `Our latest analytics release brings advanced visualization, cohort analysis, and regulatory-ready reporting to genomics workflows.

Version 3.0 introduces a new cohort builder, improved variant annotation, and dashboards that can be customized for different roles—from analysts to regulatory reviewers. Export options now support common submission formats to simplify regulatory filings.

Performance improvements mean that large whole-genome cohorts can be analyzed interactively without pre-aggregation. We have also expanded our support for multi-omics integration, allowing genomics data to be combined with transcriptomics and proteomics in a single analysis.

Existing customers can upgrade from the product dashboard. New users can start a free trial or request a demo from our website.`
  },
  {
    id: '4',
    title: 'Breakthrough in Protein Folding Prediction Validated',
    date: '2025-01-08',
    category: 'Research breakthroughs',
    excerpt: 'Independent validation confirms significant improvements in prediction accuracy for complex protein structures.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=320&fit=crop',
    imageAlt: 'Scientific research and molecular structure',
    body: `Independent validation confirms significant improvements in prediction accuracy for complex protein structures.

Our team has been working on next-generation models for protein structure prediction, with a focus on difficult targets including membrane proteins and large complexes. An independent academic group has now benchmarked our latest model against experimental structures and published results showing substantial gains over previous methods.

The validation covered hundreds of structures and multiple protein families. Improvements were especially notable for regions that are often challenging for prediction, such as disordered segments and binding interfaces.

This work supports our broader efforts in structure-based drug design and protein engineering. We will continue to publish and validate our methods as we integrate them into our product suite.`
  },
  {
    id: '5',
    title: 'BIO MINDZ to Present at BioTech Summit 2025',
    date: '2025-01-02',
    category: 'Conference participation',
    excerpt: 'Join us at BioTech Summit 2025 where we will showcase our latest innovations in computational biology and precision medicine.',
    image: 'https://images.unsplash.com/photo-1540575467063-945a9c2efb63?w=600&h=320&fit=crop',
    imageAlt: 'Conference and presentation',
    body: `Join us at BioTech Summit 2025 where we will showcase our latest innovations in computational biology and precision medicine.

We will be on the exhibition floor and in the session program. Our team will present on topics including AI in drug discovery, real-world evidence, and the future of clinical decision support. We will also host a workshop on building reproducible analysis pipelines.

BioTech Summit is one of the leading events for the life sciences industry, and we are looking forward to connecting with partners, customers, and peers. If you are attending, stop by our booth or reach out in advance to schedule a meeting.

Registration and the full agenda are available on the BioTech Summit website. We hope to see you there.`
  },
  {
    id: '6',
    title: 'Regulatory Clearance for Clinical Decision Support Module',
    date: '2024-12-18',
    category: 'Regulatory approvals',
    excerpt: 'Our clinical decision support module has received regulatory clearance, enabling deployment in certified healthcare settings.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=320&fit=crop',
    imageAlt: 'Medical and clinical setting',
    body: `Our clinical decision support module has received regulatory clearance, enabling deployment in certified healthcare settings.

The module supports clinicians with evidence-based recommendations at the point of care, drawing on guidelines and real-world data. It is designed to integrate with existing electronic health record systems and workflow.

Clearance was based on a comprehensive submission covering software lifecycle, validation, and clinical evidence. We are grateful to the regulatory team and to the clinical sites that participated in our validation studies.

Hospitals and health systems can now adopt the module within their existing compliance and procurement processes. For more information or to discuss deployment, please contact our healthcare team.`
  },
  {
    id: '7',
    title: 'Innovation in Life Sciences Award 2024',
    date: '2024-12-10',
    category: 'Awards and recognitions',
    excerpt: 'BIO MINDZ Solutions has been recognized with the Innovation in Life Sciences Award for our contributions to biotech R&D.',
    image: 'https://images.unsplash.com/photo-1567427017947-908c5a5feab6?w=600&h=320&fit=crop',
    imageAlt: 'Award and recognition',
    body: `BIO MINDZ Solutions has been recognized with the Innovation in Life Sciences Award for our contributions to biotech R&D.

The award recognizes organizations that have demonstrated outstanding innovation in technology, process, or application within the life sciences. We are honored to be among this year's recipients and to be in the company of other leading innovators.

Our team has worked tirelessly to deliver tools and solutions that make a real difference for researchers and developers. This recognition is a testament to their dedication and to the trust our customers place in us.

We thank the judging panel and the broader community. We will continue to invest in innovation and to partner with the industry to advance discovery and development.`
  }
]

export const getNewsById = (id: string): NewsItem | undefined =>
  sampleNews.find((item) => item.id === id)
