const doctors = [
    {
        id: 1,
        name: "Dr. Lucas Pereira",
        imgUrl: "https://s3-alpha-sig.figma.com/img/d10f/2183/cac140271aabfb3d58b96c32bab892ca?Expires=1638748800&Signature=aOB7zCmGZ3xt2Q3B04SybhCkBSv5ZoGAFY8F0pf7O7FZZNCL9FNZ92u-dVRbgyWtUdF9QFGg9LKz2~25Q7Oi5rnHpVHDFkKlkjFuf9aePPirtV3CJKkgDUtmmUIRJK3IPoVVihbI6K5VgWzEpsklSbSP1bkBAHHqAT9zsTwbJuJKCLKmghcNEcbd7qPcRI0mqy7kSbd3AStfYZFDMwy1jo~q1a13DuUT9efAt6QZDu79TtstbPM-qpUIdETK7vCuwEko8eDl-cp2w9oTGYgA5MGHM5cjkme-eLnLWsOqt1vjXYSSJwKlU6gfHCYIxsaQV5WRNRputZC2jBGLNCbl6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        speciality: "Endocrinologista",
        subtitle: "Especialista em hormonização",
        doctorCode: "CRM: 85490/54",
        about: {
            speciality: "Tratamento hormonal, problemas de tireoide.",
            acceptedPlans: "Particular, Planos de saúde.",
            schooling: [
                "Formação em Medicina, PUC RJ - 1998.",
                "Mestrado em Endocrinologia, UFRJ 2000.",
                " Doutorado, USP - 2006.",
            ],
        },
        contact: {
            phone: "(21) 93478-XXXX",
            email: "L.Pereira@gmail.com",
            workSchedule: {
                days: "Segundas, Quartas e Sextas",
                hours: ["Das 8h - 12h e das 14h - 18h."],
            },
            address:
                "Estrada do Capão, 568, Sl 204 - Barra Funda. Rio de Janeiro.",
        },
        reviews: [
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
        ],
    },
    {
        id: 2,
        name: "Dra. Suzane Takahashi",
        imgUrl: "https://s3-alpha-sig.figma.com/img/8160/4e44/7020bffd9378b5296bc054fb9cb7bddf?Expires=1638748800&Signature=PXj5lpUGHaFdN6jzUatATIVhENNy~X4RpVHd3tON7I6i29tmZxaXbGfbXNI2Fscp5N22WElzwmFRJhlUbHSKOC-TijSh7Lh3AciriB92qtEEqGqgpShVBZ55UNbm3f~E5E2Lbe12oi3h-TkcjcBbR0m~IpTtX3mC9YoQW-eNs-Q0d5qn5sSCPlQrA974gzjMlGqYF7j3A4PW4ZyoLz8D0IspuUn4Z56jwU24YEyJJx4VZVI346-PMgrwQt2c9eNSsgnlISZF~ncNwgUaQ1uOtAS87oQZYs11IG-PA4d3A5qGlDrHMhQtapudAn0W93zF~yXgKENZ0DL-Bfh0NqcV6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        speciality: "Endocrinologista",
        subtitle: "Especialista em hormonização",
        about: {
            speciality: "Tratamento hormonal, problemas de tireoide.",
            acceptedPlans: "Particular, Planos de saúde.",
            schooling: [
                "Formação em Medicina, PUC RJ - 1998.",
                "Mestrado em Endocrinologia, UFRJ 2000.",
                " Doutorado, USP - 2006.",
            ],
        },
        contact: {
            phone: "Contato: (21) 93478-XXXX",
            email: "L.Pereira@gmail.com",
            workSchedule: {
                days: "Segundas, Quartas e Sextas",
                hours: ["Das 8h - 12h", "das 14h - 18h."],
            },
            address:
                "Estrada do Capão, 568, Sl 204 - Barra Funda. Rio de Janeiro.",
        },
        reviews: [
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",

                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
        ],
    },
    {
        id: 3,
        name: "Dr. Ricardo Waber",
        imgUrl: "https://s3-alpha-sig.figma.com/img/2112/a39a/5443ddd5e4aa160e9714f4771910db07?Expires=1638748800&Signature=X2~DGYvf6o3ZCVZ8Oe0luHYKkB7hjuqoYaNWbxv0y4TBGf74Z1X2wTIphnsBZhwmc2nLehB-KHHfyhmxBIRZ0a8OM6WEizsTtaA2M9B2Wm6i~jaK5RvVLWMaSmiKILE0pZUZo246Ri6ps83YCRUViftSEv~2BOYcAcv5uPopk8OcV2WibZEhqGXD7HINpcsI5N7TnAZTnVgEYO59fpwxXjExT5SQnKyWqniYO-foR2CslF654DHi6WbWz4xjidZFb~Csj~j2B2Bu0Qe1NhQ7YONMVWpjZAvL~qBkHhYWxM1Neo~h3uyhS1~4~jA2PdYfNs2BVaCxwdH5pKlQY3ABxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        speciality: "Psiquiatra",
        subtitle: "Especialista em hormonização",
        about: {
            speciality: "Tratamento hormonal, problemas de tireoide.",
            acceptedPlans: "Particular, Planos de saúde.",
            schooling: [
                "Formação em Medicina, PUC RJ - 1998.",
                "Mestrado em Endocrinologia, UFRJ 2000.",
                " Doutorado, USP - 2006.",
            ],
        },
        contact: {
            phone: "Contato: (21) 93478-XXXX",
            email: "L.Pereira@gmail.com",
            workSchedule: {
                days: "Segundas, Quartas e Sextas",
                hours: ["Das 8h - 12h", "das 14h - 18h."],
            },
            address:
                "Estrada do Capão, 568, Sl 204 - Barra Funda. Rio de Janeiro.",
        },
        reviews: [
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",

                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
        ],
    },
    {
        id: 4,
        name: "Dr. Alan Souza",
        imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        speciality: "Psicólogo",
        subtitle: "Especializado em transtornos de humor",
        about: {
            speciality: "Tratamento hormonal, problemas de tireoide.",
            acceptedPlans: "Particular, Planos de saúde.",
            schooling: [
                "Formação em Medicina, PUC RJ - 1998.",
                "Mestrado em Endocrinologia, UFRJ 2000.",
                " Doutorado, USP - 2006.",
            ],
        },
        contact: {
            phone: "Contato: (21) 93478-XXXX",
            email: "L.Pereira@gmail.com",
            workSchedule: {
                days: "Segundas, Quartas e Sextas",
                hours: ["Das 8h - 12h", "das 14h - 18h."],
            },
            address:
                "Estrada do Capão, 568, Sl 204 - Barra Funda. Rio de Janeiro.",
        },
        reviews: [
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
            {
                userName: "Larissa da Silva",
                imgUrl: "https://s3-alpha-sig.figma.com/img/080a/fcaf/141acc1b1a1b3d8bfa1c4a7cac107976?Expires=1638748800&Signature=d~DVYopCCzvZOTgbpgiJ2M5PoxdtId0sCt7mSDwwalBMp9d224Jqz~-4RY433~VJYW-6~vcOg8EPquV0OC23Sq-HsAVAQ4V38TU7VeImAM60nuoib9xhsbNh3rnmF070fgpUbUjdHcSo0XgtSq2BXlJHdm1bFn6pO6mkWH0qrEKc-FWWG5-Sk11HHynC0MSLkCKon9Sv01FkCnGqZC4cm5WgWIh6L~puiSt~bl7taMcnfmP21YD8DhsUbkd6DCDcXA-E0qMkeXa1SBiJ~XrIeyZon2uRjbKmUPr8AUEUIWJsnknpjMQhaseeWL6o3UVYru4z8trAA3Ln6gHc-d1nHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",

                rating: 5,
                comment:
                    "Super atencioso, não atrasa o atendimento. Saí com todas as minhas receitas de medicamento e ainda amostra grátis dos meus medicamentos.Super indico!",
            },
        ],
    },
];

export { doctors };
