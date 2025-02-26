import Admin from "../models/AdminModels.js"
import { hashData } from "../utils/bycrptData.js"
const createSeeder = async () => {

    const admin = await Admin.create({
        nama: "Dicky Fernando",
        email: 'dickyfernando@gmail.com',
        role:"Pemilik",
        password:await hashData('dicky123')
    })
}

const userss = await createSeeder()
