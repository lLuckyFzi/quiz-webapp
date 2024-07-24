import { Layout, Menu } from "antd";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { FaHome } from "react-icons/fa";

const { Content, Sider } = Layout;

function App() {
  const SIDER_STYLE = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "white",
  };

  return (
    <Layout hasSider>
      <Sider style={SIDER_STYLE}>
        <Header />
        <Menu
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[{ key: 1, icon: <FaHome />, label: "Home" }]}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div className="min-h-screen bg-white rounded-lg p-5 flex justify-center items-center">
            <Quiz />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
