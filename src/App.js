import Header from "./Components/Header";
import Main from "./Components/Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question";
import NextQuestion from "./Components/NextQuestion";
import Progress from "./Components/Progress";
import FinishScreen from "./Components/FinishScreen";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import useQuiz from "./hooks/useQuiz";

export default function App() {
    const { status } = useQuiz();

    return (
        <div className="app">
            <Header />

            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen />}
                {status === "active" && (
                    <>
                        <Progress />
                        <Question />
                        <Footer>
                            <Timer />
                            <NextQuestion />
                        </Footer>
                    </>
                )}
                {status === "finished" && <FinishScreen />}
            </Main>
        </div>
    );
}
