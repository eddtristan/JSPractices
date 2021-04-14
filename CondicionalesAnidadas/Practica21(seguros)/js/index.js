const btnCotizar = document.getElementById("btnCotizar");

btnCotizar.addEventListener("click", cotizarPoliza);

function cotizarPoliza() {
    const tipo = document.getElementById("sltTipo").value;
    const alcohol = document.getElementById("sltAlcohol").value;
    const lentes = document.getElementById("sltLentes").value;
    const enfermedad = document.getElementById("sltEnfermedad").value;
    const mayor = document.getElementById("sltMayor").value;

    let precio = 0;

    let resultado = document.getElementById("resultado");

    if (tipo == "tipoA") {
        if (alcohol == "alcohol") {
            if (lentes == "lentes") {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            } else {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.1) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            }
        } else {
            if (lentes == "lentes") {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            } else {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.05) + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 1200 + (1200 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 1200 + (1200 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            }
        }
    } else {
        if (alcohol == "alcohol") {
            if (lentes == "lentes") {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            } else {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.1) + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.1) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.1) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            }
        } else {
            if (lentes == "lentes") {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.05) + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.05) + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            } else {
                if (enfermedad == "enfermedad") {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.05) + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.05) + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                } else {
                    if (mayor == "mayor") {
                        precio = 950 + (950 * 0.2);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    } else {
                        precio = 950 + (950 * 0.1);
                        resultado.innerText = `El precio de la póliza que desea contratar es de: $${precio}`;
                    }
                }
            }
        }
    }
}