import { FaAws, FaDocker, FaJenkins, FaShieldAlt, FaChartLine, FaLinux } from "react-icons/fa";

const ServicesData = [
  {
    s_no: "01",
    s_name: "Cloud & Infrastructure",
    s_desc: "Working knowledge of AWS services such as EC2, EKS, S3, VPC, CodePipeline, and IAM for deploying and managing applications. Hands-on experience using Infrastructure as Code (IaC) with Terraform, Ansible, and CloudFormation to automate provisioning and manage scalable environments.",
    icon: FaAws
  },
  {
    s_no: "02",
    s_name: "Containers & Orchestration",
    s_desc: "Practical experience using Docker to containerize applications and Kubernetes to deploy, scale, and manage workloads. Good understanding of GitOps practices with Argo CD for automating application delivery in cloud-native setups.",
    icon: FaDocker
  },
  {
    s_no: "03",
    s_name: "CI/CD & Automation",
    s_desc: "Hands-on in setting up CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline. Comfortable writing automation scripts with Python, Bash, and YAML to streamline builds, testing, and deployments across environments.",
    icon: FaJenkins
  },
  {
    s_no: "04",
    s_name: "Security & Compliance",
    s_desc: "Experience integrating security tools like OWASP ZAP and Trivy into pipelines for vulnerability scanning. Familiar with configuring AWS Security Groups, managing secrets with HashiCorp Vault, and improving code quality with SonarQube.",
    icon: FaShieldAlt
  },
  {
    s_no: "05",
    s_name: "Monitoring & Observability",
    s_desc: "Good understanding of monitoring systems with Prometheus and creating dashboards in Grafana. Familiar with the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging and improving system visibility.",
    icon: FaChartLine
  },
  {
    s_no: "06",
    s_name: "Version Control & Operating Systems",
    s_desc: "Working experience with Git for version control and collaborating on projects using GitHub and GitLab. Comfortable with Linux environments, mainly Ubuntu and Red Hat Enterprise Linux, for development and server management.",
    icon: FaLinux
  }
];

export default ServicesData;