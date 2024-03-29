export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export const projectList: Project[] = [
  {
    title: "Dolfin 가상자산 장외거래 서비스",
    description:
      "Dolfin User side, Admin side 프론트엔드 개발, Dolfin 자체 디자인 시스템을 구축하는 프로젝트를 진행하였습니다.",
    image: "/assets/projects/dolfin.png",
    url: "",
  },
  {
    title: "Dolfin Microsite",
    description:
      "Dolfin Microsite(반응형 사이트) 프론트엔드 개발. Storybook을 도입하여 재사용 가능한 UI 프로토타입 개발&디자이너와의 업무 프로세스를 개선하였습니다.",
    image: "/assets/projects/dolfin.png",
    url: "",
  },
  {
    title: "롯데마트 GO - 코인 시스템",
    description:
      "롯데마트 GO 코인 리워드 시스템 프론트엔드 개발. Redux를 사용해서 Props 복잡도를 개선하였습니다.",
    image: "/assets/projects/lotte.png",
    url: "",
  },
  {
    title: "펜타웍스 자체 솔루션 Review",
    description:
      "고객사의 리뷰를 통계적으로 관리할 수 있는 Review 솔루션 개발. 풀스택 개발자로 참여하여 Rest API 개발부터 프론트엔드 개발까지 담당하였습니다.",
    image: "/assets/projects/penta.png",
    url: "",
  },
  {
    title: "롯데 홈쇼핑 - IToo, Wyd",
    description:
      "콜센터 Back Office 개발에 풀스택 개발자로 참여. 1:1 문의, 이벤트 관리 메뉴 프론트엔드 및 서버 개발하였습니다.",
    image: "/assets/projects/itoo.png",
    url: "",
  },
];
