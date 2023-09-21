/** @format */

import React, { Component } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import styles from './styles';
import AppText from '../AppText';

class AlertContainer extends React.Component {
    static defaultProps = {
        closeOnTouch: true,
        visible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
        };
    }

    componentDidMount = () => {
        if (this.state.visible) {
            this.show();
        }
    };

    // componentWillReceiveProps = nextProps => {
    //   if (nextProps.visible !== this.props.visible) {
    //     if (nextProps.visible) {
    //       this.show();
    //     } else {
    //       this.close();
    //     }

    //     this.setState({
    //       visible: nextProps.visible,
    //     });
    //   }
    // };

    componentDidUpdate(prevProps: any) {
        if (prevProps.visible !== this.props.visible) {
            if (prevProps.visible) {
                this.show();
            } else {
                this.close();
            }

            this.setState({
                visible: prevProps.visible,
            });
        }
    }

    componentWillUnmount = () => {
        this.close();
    };

    shouldComponentUpdate = (nextProps: any, nextState: any) =>
        this.state.visible !== nextState.visible;

    show() {
        this.setState({ visible: true });
    }

    close() {
        this.setState({ visible: false });
        this.props.onClose && this.props.onClose();
    }

    render() {
        return this.state.visible ? (
            <View style={styles.modalWrapper}>
                <TouchableWithoutFeedback
                    onPress={() =>
                        this.props.closeOnTouch === true
                            ? this.setState({ visible: false })
                            : null
                    }
                >
                    <View style={styles.modalUnderlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalStyle}>
                    <View style={styles.alertContent}>
                        <View style={styles.alertView} />
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.scrollViewStyles}
                        >
                            {this.props.title ? (
                                <AppText style={styles.textTitle}>
                                    {this.props.title}
                                </AppText>
                            ) : null}
                            <AppText
                                numberOfLines={10}
                                style={styles.textMessage}
                            >
                                {this.props.message}
                            </AppText>
                        </ScrollView>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => this.close()}
                            style={styles.button}
                        >
                            <AppText style={styles.buttonText}>OK</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ) : null;
    }
}

class Alert extends Component {
    static displayName = 'Alert';

    static propTypes = AlertContainer.propTypes;

    static alert = (message, options = {}) =>
        new RootSiblings(
            <AlertContainer message={message} {...options} visible={true} />
        );

    static hide = (alert) => {
        if (alert instanceof RootSiblings) {
            alert.destroy();
        } else {
            console.warn(
                `Alert.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`
            );
        }
    };

    _alert = null;

    componentDidMount() {
        this._alert = new RootSiblings(<AlertContainer {...this.props} />);
    }

    // componentWillReceiveProps = nextProps => {
    //   this._alert.update(<AlertContainer {...nextProps} />);
    // };

    componentDidUpdate() {
        this._alert.update(<AlertContainer {...this.props} />);
    }

    componentWillUnmount = () => {
        this._alert.destroy();
    };

    render() {
        return null;
    }
}

export { RootSiblings as Manager };
export default Alert;
