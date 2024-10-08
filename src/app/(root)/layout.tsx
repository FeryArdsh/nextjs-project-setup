interface IndexLayoutProps {
  children: React.ReactNode;
}

const IndexLayout = ({ children }: IndexLayoutProps) => {
  return <main>{children}</main>;
};

export default IndexLayout;
