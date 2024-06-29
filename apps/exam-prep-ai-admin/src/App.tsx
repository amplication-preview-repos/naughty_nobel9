import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserQueryList } from "./userQuery/UserQueryList";
import { UserQueryCreate } from "./userQuery/UserQueryCreate";
import { UserQueryEdit } from "./userQuery/UserQueryEdit";
import { UserQueryShow } from "./userQuery/UserQueryShow";
import { StudyMaterialList } from "./studyMaterial/StudyMaterialList";
import { StudyMaterialCreate } from "./studyMaterial/StudyMaterialCreate";
import { StudyMaterialEdit } from "./studyMaterial/StudyMaterialEdit";
import { StudyMaterialShow } from "./studyMaterial/StudyMaterialShow";
import { ProblemSolutionList } from "./problemSolution/ProblemSolutionList";
import { ProblemSolutionCreate } from "./problemSolution/ProblemSolutionCreate";
import { ProblemSolutionEdit } from "./problemSolution/ProblemSolutionEdit";
import { ProblemSolutionShow } from "./problemSolution/ProblemSolutionShow";
import { FlashcardList } from "./flashcard/FlashcardList";
import { FlashcardCreate } from "./flashcard/FlashcardCreate";
import { FlashcardEdit } from "./flashcard/FlashcardEdit";
import { FlashcardShow } from "./flashcard/FlashcardShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ExamPrepAI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserQuery"
          list={UserQueryList}
          edit={UserQueryEdit}
          create={UserQueryCreate}
          show={UserQueryShow}
        />
        <Resource
          name="StudyMaterial"
          list={StudyMaterialList}
          edit={StudyMaterialEdit}
          create={StudyMaterialCreate}
          show={StudyMaterialShow}
        />
        <Resource
          name="ProblemSolution"
          list={ProblemSolutionList}
          edit={ProblemSolutionEdit}
          create={ProblemSolutionCreate}
          show={ProblemSolutionShow}
        />
        <Resource
          name="Flashcard"
          list={FlashcardList}
          edit={FlashcardEdit}
          create={FlashcardCreate}
          show={FlashcardShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
