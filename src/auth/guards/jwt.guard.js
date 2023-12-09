export default function jwtGuard(req, res, next) {
    const authorization = req.headers.authorization;
    
    if (!authorization) res.status(401).json({ message: "Token não informado" });

    const [prefix, token] = authorization.split(" ");

    if (prefix !== "Bearer") res.status(401).json({ message: "Token não informado" });
        res.status.json({ message: "Token mal formatado" });

    try{
        const decoded = jwt.verify(token, "secret");
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(401).json({ message: e.message });
    }

}