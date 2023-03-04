

def touch(body, filename):
    f = open(filename, 'x')
    f.write(body)
    f.close()

def generate_provider():
    name = input("input provider name: ")
    upper = name.upper()
    capitalized = name.capitalize()
    template = """
import {{ DataSource }} from 'typeorm';
import {{ {0} }} from './entities/{1}.entity';

export const {1}Providers = [
{{
    provide: '{2}_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository({0}),
    inject: ['DATA_SOURCE'],
}},
];

""".format(capitalized, name, upper)
    touch(template, name + ".providers.ts")


def main():
    filetype = input("input filetype: (provider, )")
    if filetype == "provider":
        generate_provider()

main()
