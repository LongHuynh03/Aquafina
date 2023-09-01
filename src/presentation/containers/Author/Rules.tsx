import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../components/background/Background'
import { IMAGE_RIPPLE_RULES } from '../../../assets'
import { Colors } from '../../resource'
import { QuantityGift } from '../../../domain/entity/QuantityGift'
import { useSelector } from 'react-redux'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import { getQuantityGift } from '../../shared-state/redux/reducers/QuantityGift'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog'

const Rules: React.FC<HomeDrawerScreenProps<'Rules'>> = ({ route, navigation }) => {

  const dispatch = useAppDispatch();
  const [showPopupLogOut, setShowPopupLogOut] = useState(false);
  const [showPopupLogIn, setShowPopupLogIn] = useState(false);

  const isLogin: boolean = useSelector<RootState, boolean>(
    (state) => state.user.isLogin
  )

  useEffect(() => {
    dispatch(getQuantityGift());
    return () => { }
  }, [])

  const listQuantityGift: QuantityGift[] = useSelector<RootState, QuantityGift[]>(
    (state) => state.quantityGift.list
  );

  const menu = () => {
    navigation.openDrawer();
  }

  const logOut = () => {
    dispatch(signOut());
    navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const goHome = () => {
    navigation.navigate('Home')
  };

  const goChart = () => {
    if (isLogin) {
      navigation.navigate('PureChart')
      navigation.reset({
        index: 0,
        routes: [{ name: 'PureChart' }],
      });
    }
    else {
      setShowPopupLogIn(true);
    }
  }

  const goCoin = () => {
    if (isLogin) {
      navigation.navigate('PureCoin')
      navigation.reset({
        index: 0,
        routes: [{ name: 'PureCoin' }],
      });
    }
    else {
      setShowPopupLogIn(true);
    }
  }

  const goGift = () => {
    navigation.navigate('PureGift')
    navigation.reset({
      index: 0,
      routes: [{ name: 'PureGift' }],
    });
  }
  const goMap = () => {
    navigation.navigate('PureMap')
    navigation.reset({
      index: 0,
      routes: [{ name: 'PureMap' }],
    });
  }
  const goWorld = () => {
    navigation.navigate('PureWorld')
    navigation.reset({
      index: 0,
      routes: [{ name: 'PureWorld' }],
    });
  }

  return (
    <Background
      type='home'
      centerFocus={goHome}
      leftFocus={menu}
      rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}
    >
      <Image source={{ uri: IMAGE_RIPPLE_RULES }} style={styles.imageBackground} />
      <View style={styles.container}>
        <ScrollView style={{ paddingHorizontal: Dimensions.get('screen').width * 0.04 }}>
          <Text style={styles.textTitle}>THỂ LỆ CHƯƠNG TRÌNH</Text>
          <Text style={styles.textTitle_1}>TÁI SINH CHAI NHỰA - NHẬN QUÀ SỐNG XANH</Text>
          <Text style={styles.textTime}>(Diễn ra từ ngày 17/07/2022 đến hết ngày 17/10/2022)</Text>
          <Text style={styles.textMuc}>1.	Đối  tượng tham gia:</Text>
          <Text style={styles.textContent}>Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 18 tuổi.</Text>

          <Text style={styles.textMuc}>2.	Nội dung và thể lệ chi tiết chương trình:</Text>
          <Text style={styles.textMuc_1}>2.1	Cách thức tham gia chương trình: </Text>
          <Text style={styles.textContent}>Người chơi tham gia chương trình bằng cách thực hiện theo các bước dưới đây:</Text>

          <View style={styles.boxStep}>
            <Text style={styles.textContent}>
              <Text style={styles.textStep}>Bước 1:</Text> Người chơi đến các địa điểm lắp đặt máy
              thu gom vỏ chai nhựa đã qua sử dụng của
              Aquafina (sau đây được gọi tắt là <Text style={{ fontWeight: '700' }}>"Trạm Tái
                Sinh"</Text>) để tham gia vào chương trình <Text style={styles.textBold}>“Tái sinh
                  chai nhựa – Nhận quà sống xanh”</Text>. {`\n`}
              Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình
              LCD (hoặc màn hình điện tử) ghi rõ thông tin
              hướng dẫn người tham gia thực hiện theo các
              bước tuần tự để hoàn thành một lượt tham gia.
            </Text>
            <Text style={styles.textContent}>
              <Text style={styles.textStep}>Bước 2:</Text> Người chơi nhấn vào nút <Text style={styles.textBold}>"Bắt đầu" </Text>
              trên màn hình LCD (hoặc màn hình điện tử, tùy từng
              Trạm Tái Sinh) để bắt đầu một lượt tham gia.
            </Text>
            <Text style={styles.textContent}>
              <Text style={styles.textStep}>Bước 3:</Text> Người chơi bỏ chai nhựa rỗng vào vị trí
              có ghi <Text style={styles.textBold}>"Nhận chai ở đây"</Text> của máy tại Trạm
              Tái Sinh và chờ hệ thống xử lý.
            </Text>
            <Text style={styles.textContent}>
              <Text style={styles.textBold}>Bước 4:</Text> Sau khi hệ thống xử lý xong, màn hình
              LCD/điện tử sẽ trả về một mã QR. Người chơi sử
              dụng điện thoại để quét mã QR trên màn hình để
              dẫn vào website: <Text style={styles.textLink}>http://aquafina.pepsishop.vn/</Text> .
            </Text>
            <View style={styles.boxDot}>
              <Text style={styles.textDot}> • </Text>
              <Text style={styles.textContent}>
                Nếu người chơi lần đầu tham gia, người chơi cần
                thực hiện đăng ký tài khoản bằng cách nhập số
                điện thoại theo hướng dẫn tại website. Hệ thống
                sẽ gửi mã OTP để xác minh số điện thoại của
                người chơi. Người chơi cần nhập mã OTP
                để đăng nhập và nhận thông báo về tổng điểm
                Aquafina mình đã tích lũy.
              </Text>
            </View>
            <View style={styles.boxDot}>
              <Text style={styles.textDot}> • </Text>
              <Text style={styles.textContent}>
                Nếu người chơi đã đăng ký tài khoản, thì khi
                quét mã QR để dẫn về website: <Text style={styles.textLink}>http://
                  aquafina.pepsishop.vn/</Text> , người chơi cần nhập số
                điện thoại để hệ thống ghi nhận điểm Aquafina
                của lượt tham gia mới.
              </Text>
            </View>
            <Text style={styles.textContent}>
              Người chơi sẽ được tích lũy điểm Aquafina và
              điểm Aquafina sẽ được tổng kết mỗi tuần theo tỷ
              lệ quy đổi điểm như sau:
            </Text>
            <View style={styles.boxDot}>
              <Text style={styles.textDot}> • </Text>
              <Text style={styles.textContent}>
                <Text style={styles.textBold}>Chai Aquafina: </Text>người chơi được ghi nhận 2 điểm
                Aquafina cho mỗi vỏ chai Aquafina.
              </Text>
            </View>
            <View style={styles.boxDot}>
              <Text style={styles.textDot}> • </Text>
              <Text style={styles.textContent}>
                <Text style={styles.textBold}>Không phải chai Aquafina: </Text>người chơi được ghi
                nhận 1 điểm Aquafina cho mỗi vỏ chai.
              </Text>
            </View>
            <Text style={styles.textContent}>
              <Text style={styles.textStep}>Bước 5: </Text>Mỗi tuần, căn cứ vào số lượng người chơi
              và điểm Aquafina mà người chơi tích lũy được,
              SPVB sẽ công bố bảng xếp hạng <Text style={styles.textBold} >400 người </Text>chơi
              có điểm Aquafina cao nhất (được hiển thị đầy đủ
              trên bảng xếp hạng tại website <Text style={styles.textLink}>http://
                aquafina.pepsishop.vn/ </Text>  và trên fanpage <Text style={styles.textLink}>https://
                  www.facebook.com/Aquafinavietnam) </Text>vào lúc
              12h00’ giờ ngày thứ 7 hàng tuần (hoặc một
              thời gian khác theo quyết định của Công ty TNHH
              Nước giải khát Suntory PepsiCo Việt Nam - SPVB)
              trong thời gian diễn ra chương trình.
            </Text>
            <Text style={styles.textContent}>
              <Text style={styles.textBold}>
                *Lưu ý: Người chơi vẫn có thể tiếp tục chơi và
                tích lũy điểm Aquafina ở các tuần tiếp theo để có
                cơ hội nhận được các phần quà trong thời gian
                diễn ra chương trình.
              </Text>
            </Text>
          </View>

          <Text style={styles.textMuc_1}>2.2 Những quy định về chương trình: </Text>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Số điểm Aquafina có được hàng tuần sẽ không
              được cộng dồn trong suốt thời gian diễn ra
              chương trình, mà sẽ được tổng kết điểm Aquafina
              vào mỗi tuần.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Quà tặng chỉ được trao bằng hiện vật, không có
              giá trị quy đổi thành tiền mặt.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Do số lượng quà tặng có giới hạn, SPVB có quyền
              thay đổi quà tặng (về kích thước, màu sắc, sản
              phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã
              cam kết.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Khi chương trình kết thúc, số điểm Aquafina
              không được sử dụng sẽ không còn giá trị.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> . </Text>
            <Text style={styles.textContent}>
              Chương trình có thể kết thúc sớm khi số lượng
              quà tặng đã được quy đổi hết.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> . </Text>
            <Text style={styles.textContent}>
              Người chơi chịu các khoản thuế, phí theo quy
              định của pháp luật khi nhận quà tặng theo
              chương trình này.
            </Text>
          </View>

          <Text style={styles.textMuc_1}>2.3 Số lượng quà tặng: </Text>
          <View style={styles.boxStep}>
            <Text style={styles.textContent}>
              Số lượng quà tặng và điểm Aquafina cần thiết để
              quy đổi được quy định chi tiết theo bảng dưới đây
            </Text>
          </View>
          <View style={styles.listItem}>
            {
              listQuantityGift.map((item) => {
                return (
                  <View style={styles.item} key={item.keyQuantity}>
                    <Image source={{ uri: item.image }} style={styles.imageItem} />
                    <Text style={styles.textNameItem}>{item.name}</Text>
                    <Text style={styles.textNameItem}>Aquafina x Headless</Text>
                    <Text style={styles.textItem}>Số lượng quà tặng mỗi tuần : {item.quantity}</Text>
                    <Text style={styles.textItem}>Cách thức đổi quà: {item.method}</Text>
                    <Text style={styles.textItem}>Giá trị quà tặng (+VAT): {item.price}</Text>
                  </View>
                )
              }
              )
            }
          </View>

          <Text style={styles.textMuc_1}>2.4 Cách thức nhận quà tặng: </Text>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Mỗi tuần SPVB sẽ công bố danh sách 400 người
              chơi có điểm Aquafina cao nhất và quà tặng trên
              fanpage Aquafina và trên website <Text style={styles.textBold}>http://
                aquafina.pepsishop.vn/  vào lúc 12h00’ giờ ngày
                thứ 7 hàng tuần trong thời gian diễn ra chương
                trình,</Text> người chơi cần cung cấp thông tin cá nhân
              cho SPVB theo hướng dẫn trong vòng 7 ngày kể
              từ ngày đổi quà để được hướng dẫn nhận quà
              tặng. Việc người chơi cung cấp thông tin cá nhân
              cho SPVB theo mục đích này được hiểu là hành
              động cho phép SPVB thu thập và sử dụng thông
              tin cá nhân của người chơi theo mục địch đã nêu.
              Trong mọi trường hợp, việc người chơi gửi thông
              tin nhận quà sau thời gian quy định là không hợp
              lệ, và được xem là người chơi từ bỏ việc nhận quà.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Quà tặng sẽ được vận chuyển đến địa chỉ mà
              người chơi đã cung cấp khi Bên thứ 3 – phụ trách
              việc vận chuyển quà cho SPVB  trong vòng 30
              ngày kể từ ngày kết thúc chương trình. Trong
              trường hợp bất khả kháng như thiên tai, dịch
              bệnh, việc vận chuyển có thể bị ảnh hưởng và
              thời gian trao quà sẽ kéo dài hơn so với thời hạn
              đã cam kết nêu trên. SPVB sẽ không chịu trách
              nhiệm nếu thông tin nhận quà mà người chơi
              cung cấp không chính xác. Người chơi có trách
              nhiệm ký tên trên phiếu giao hàng, biên bản bàn
              giao quà tặng, vận đơn bưu điện hoặc một tài liệu
              có tên gọi khác nhằm xác định đã nhận quà từ
              chương trình.
            </Text>
          </View>
          <View style={styles.boxDot}>
            <Text style={styles.textDot}> • </Text>
            <Text style={styles.textContent}>
              Mỗi cá nhân có quyền thắng nhiều hơn 1 giải
              trong thời gian diễn ra chương trình với điều kiện
              không thắng giải trong cùng 1 thời điểm.
            </Text>
          </View>

          <Text style={styles.textMuc}>3.	Quy định chung:</Text>
          <View style={styles.boxStep}>
            <Text style={styles.textContent}>
              SPVB có quyền cập nhật và thay đổi thể lệ
              chương trình này để phù hợp hơn với người chơi
              và thông báo công khai đến người chơi. Trong
              trường hợp có sự thay đổi về thể lệ cũng như thời
              gian tổ chức, SPVB sẽ thông báo trên trang
              fanpage của chương trình tại {"\n"}
              <Text style={styles.textBold}>https://www.facebook.com/Aquafinavietnam </Text>
              {"\n"}
              Mọi thắc mắc liên quan đến chương trình, người
              chơi có thể nhắn tin vào hộp thư trang fan page
              của chương trình tại: <Text style={styles.textBold}>https://www.facebook.com/
                Aquafinavietnam</Text> hoặc gọi điện theo số tổng đài
              19001220. SPVB chỉ chịu trách nhiệm giải quyết
              những khiếu nại, tranh chấp được gửi đến SPVB
              trong thời hạn từ lúc bắt đầu chương trình cho
              đến khi hoàn tất việc trao quà tặng cho người
              chơi quy đổi quà tặng hợp lệ theo quy định tại
              Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có
              tranh chấp về việc thực chương trình (bao gồm
              nhưng không giới hạn việc xác định người chơi
              chiến thắng theo bảng xếp hạng tuần, quy đổi
              quà tặng hợp lệ), thì quyền quyết định cuối cùng
              sẽ thuộc về SPVB.
              {"\n"}
              SPVB cam kết thực hiện đúng và hoàn toàn chịu
              trách nhiệm về chương trình trên theo các qui
              định của pháp luật hiện hành.
              {"\n"}
              Phù hợp với qui định của pháp luật, SPVB có
              quyền chấm dứt hoặc huỷ chương trình này trong
              trường hợp bất khả kháng và sẽ thông báo công
              khai phù hợp với quy định pháp luật.
              {"\n"}
              Nếu phát hiện có dấu hiệu gian lận, sử dụng công
              cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ
              bị khóa đến hết thời gian diễn ra chương trình,
              mọi quà tặng sẽ bị thu hồi.
              {"\n"}
              Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài
              khoản với chúng tôi hoặc truy cập Nền tảng,
              người chơi xác nhận và đồng ý rằng người chơi
              chấp nhận các phương pháp, yêu cầu, và/hoặc
              chính sách được mô tả trong Chính sách bảo mật
              này, và theo đây bạn đồng ý cho phép chúng tôi
              thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá
              nhân của bạn cho mục đích thương mại.
            </Text>
          </View>
          <Button
            containerStyle={styles.button}
            title='Đã hiểu'
            titleStyle={styles.titleButton}
            onPress={() => navigation.navigate('PureGift')}
          />
        </ScrollView>
        <Footer
          onPress_PureChart={goChart}
          onPress_PureCoin={goCoin}
          onPress_PureGift={goGift}
          onPress_PureMap={goMap}
          onPress_PureWorld={goWorld}
          onPressReport={() => navigation.navigate('ReportError')}
        />
      </View>
      <DialogLogOut
        isVisible={showPopupLogOut}
        onPressCancel={() => setShowPopupLogOut(false)}
        onPressLogout={logOut}
      />
      <DialogLogIn
        isVisible={showPopupLogIn}
        onPressCancel={() => setShowPopupLogIn(false)}
        onPressLogIn={() => {
          setShowPopupLogIn(false);
          navigation.navigate('LogIn');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      />
    </Background>
  )
}

export default Rules

const styles = StyleSheet.create({
  container: {

  },
  imageBackground: {
    position: 'absolute',
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    top: 0
  },
  boxStep: {
    paddingStart: Dimensions.get('screen').width * 0.05,
  },
  boxDot: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 21.6,
    color: 'rgba(41, 43, 46, 1)'
  },
  textTitle_1: {
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 16.8,
    color: Colors.BLUE_KV
  },
  textTime: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: 'rgba(41, 43, 46, 0.8)'
  },
  textMuc: {
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 21,
    color: 'rgba(41, 43, 46, 0.8)'
  },
  textMuc_1: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 21,
    color: 'rgba(41, 43, 46, 0.8)',
    fontStyle: 'italic',
  },
  textContent: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    color: 'rgba(41, 43, 46, 0.8)'
  },
  textStep: {
    textDecorationLine: 'underline',
    fontWeight: '700',
    textAlign: 'justify',
  },
  textBold: {
    fontWeight: '700'
  },
  textLink: {
    fontWeight: '700',
    fontStyle: 'italic'
  },
  textDot: {},
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: Dimensions.get('screen').width * 0.05
  },
  item: {
    width: Dimensions.get('screen').width * 0.43,
    // margin: Dimensions.get('screen').width * 0.03
  },
  imageItem: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.2
  },
  textNameItem: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    color: 'rgba(41, 43, 46, 0.8)'
  },
  textItem: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: 'rgba(41, 43, 46, 0.8)'
  },
  button: {
    width: Dimensions.get('screen').width * 0.3,
    backgroundColor: Colors.BLUE,
    height: Dimensions.get('screen').height * 0.05,
    marginVertical: Dimensions.get('screen').height * 0.03,
    borderColor: Colors.BLUE
  },
  titleButton: {
    color: Colors.WHITE
  },
})