import React,{useState,useEffect} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LikeCard from '../components/LikeCard';

export default function({navigation}) {
    const [tip, setTip] = useState([{
        "idx":3,
        "category":"재테크",
        "title":"잠자는 내 돈을 찾아라",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmoney1.png?alt=media&token=491096e7-0b57-40a3-991b-b984193f8018",
        "desc":"‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
        "date":"2020.09.09"
    },
    {
        "idx":4,
        "category":"재테크",
        "title":"할인행사, 한정할인판매 문구의 함정 탈출!",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmoney2.png?alt=media&token=9c9df304-16e8-4a6f-8ae4-1d3f9ad58134",
        "desc":"‘안 사면 100% 할인’이라는 말 들어보셨나요? 견물생심, 좋은 물건을 보면 사고 싶기 마련입니다. 특히 대대적인 ‘할인 행사’ 중인 대형 마트에 갔을 때는 말할 것도 없겠죠. 따라서 생필품을 살 때, 한꺼번에 사서 사용하는 것보다 필요할 때 조금씩 구매하는 편이 좋습니다. 장을 보면서 대형마트에 자주 가다 보면 지금 필요한 것뿐 아니라 앞으로 필요할 것까지 사게 되어 지출이 커지기 때문입니다. 특히 할인 품목을 보면 뜻하지 않은 소비를 하는 경우도 많아진다. 홈쇼핑, 대형마트 등의 ‘할인행사’, ‘한정할인판매’ 등의 문구를 조심하세요. ",
        "date":"2020.09.09"
    }])

    useEffect(()=>{

        navigation.setOptions({
            title:'꿀팁 찜'
        })

        setTip(tip);

      },[])

    return ( 
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다. 
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                {/* 하나의 카드 영역을 나타내는 View */}
                {
                tip.map((content,i)=>{
                    return (<LikeCard content={content} key={i} navigation={navigation}/>)
                })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      //앱의 배경 색
      backgroundColor: '#fff',
    },
    cardContainer: {
        marginTop:10,
        marginLeft:10
    }
});