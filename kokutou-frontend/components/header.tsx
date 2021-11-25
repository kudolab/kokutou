import {
  Flex, HStack, Link, Spacer,
} from '@chakra-ui/react';
import IconHeadphone from 'components/icon-headphone';
import StartButton from 'components/start-button';

export default function Header() {
  return (
    <Flex as="header" position="fixed" w="100%" boxShadow="base">
      <HStack p="10px" pl="20px" spacing="20px" align="center" justify="center">
        <IconHeadphone width="32px" height="32px" />
        <Link href="/">
          この実験はなに？
        </Link>
        <Link href="/">
          実験方法
        </Link>
        <Link href="/">
          データの取り扱いについて
        </Link>
        <Link href="/">
          コンタクト
        </Link>
      </HStack>
      <Spacer />
      <HStack
        p="10px"
        pr="20px"
        spacing="20px"
        align="center"
        justify="center"
        justifySelf="flex-end"
      >
        <StartButton size="md" />
      </HStack>
    </Flex>
  );
}

// const NavigationC: React.VFC = () => {
//   return (
//     <NavigationC>
//       <Frame12>
//         <Frame64>
//           <Frame65>
//             <IconHeadphone>
//               <headphone>
//                 <img src="" />
//               </headphone>
//             </IconHeadphone>
//           </Frame65>
//           <Text>この実験はなに？</Text>
//           <Text>実験方法</Text>
//           <Text>データの取り扱い</Text>
//           <Text>コンタクト</Text>
//         </Frame64>
//       </Frame12>
//       <Button>
//         <Text>はじめる</Text>
//       </Button>
//     </NavigationC>
//   )
// }
//
// const NavigationC = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 0.375rem 3.0625rem;
//   gap: 30.8125rem;
//   background-color: #ffffff;
// `
// const Frame12 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 1.625rem;
// `
// const Frame64 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 1.25rem;
// `
// const Frame65 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: flex-start;
//   padding: 0.375rem;
//   gap: 0.625rem;
//   background-color: #ffffff;
// `
// const IconHeadphone = styled.div`
//   height: 36px;
//   width: 36px;
//   background-color: #ffffff;
// `
// const headphone = styled.div`
//   height: 35px;
//   width: 35px;
// `
// const img1 = styled.div`
//   height: 35px;
//   width: 35px;
// `
// const text2 = styled.div`
//   text-align: center;
//   vertical-align: middle;
//   font-size: 15px;
//   font-family: Montserrat;
//   letter-spacing: -1.5%;
//   line-height: auto;
//   color: #38b2ac;
// `
// const text3 = styled.div`
//   text-align: center;
//   vertical-align: middle;
//   font-size: 15px;
//   font-family: Montserrat;
//   letter-spacing: -1.5%;
//   line-height: auto;
//   color: #38b2ac;
// `
// const text4 = styled.div`
//   text-align: center;
//   vertical-align: middle;
//   font-size: 15px;
//   font-family: Montserrat;
//   letter-spacing: -1.5%;
//   line-height: auto;
//   color: #38b2ac;
// `
// const text5 = styled.div`
//   text-align: center;
//   vertical-align: middle;
//   font-size: 15px;
//   font-family: Montserrat;
//   letter-spacing: -1.5%;
//   line-height: auto;
//   color: #38b2ac;
// `
// const Button = styled.div`
//   border-radius: 0.375rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 0.625rem 1.5rem;
//   gap: 0.5rem;
//   background-color: #319795;
// `
// const text6 = styled.div`
//   text-align: left;
//   vertical-align: top;
//   font-size: 18px;
//   font-family: Inter;
//   line-height: 28%;
//   color: #ffffff;
// `
