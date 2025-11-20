{

    interface Ideveloper<t,t2 = null> {
        name: string;
        device: {
            deviceType: string;
            brand: string;
            ageOfDevice: number;
        }
        smartWatch: t;
        bike? : t2;
    }

    const poorDeveloper: Ideveloper<{ BrandName: string; model: string }> = {
        name: "samir",
        device: {
            deviceType: "computer",
            brand: "lenevo",
            ageOfDevice: 3,
        },
        smartWatch: {
            BrandName: "xioami",
            model: "h2-422",
        }
    };

    interface IappleWatch { heartTrack: boolean; bloodPressure: string; stepCount: number }

    interface IYamaha {
        model: string;
        regNo:number;
    }

    const richDeveloper: Ideveloper<IappleWatch,IYamaha> = {
        name: "samir",
        device: {
            deviceType: "computer",
            brand: "lenevo",
            ageOfDevice: 3,
        },
        smartWatch: {
            heartTrack: true,
            bloodPressure: "No",
            stepCount: 22
        },
        bike:{
            model: "R15",
            regNo: 245435123513,
        }

    };




}